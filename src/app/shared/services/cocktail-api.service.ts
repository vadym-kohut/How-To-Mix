import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, combineLatestWith } from 'rxjs/operators';
import {
  CocktailDetails,
  CocktailDetailsResponse,
  CocktailFilters,
  CocktailFiltersResponse,
  CocktailListItem
} from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {
  private http = inject(HttpClient);
  private apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";

  getAllCocktailsList$(): Observable<CocktailDetails[]> {
    return this.http.get<{
      '-O8hJFpM2_4Fr7pvti22': CocktailDetails[]
    }>("https://how-to-mix-default-rtdb.firebaseio.com/cocktails.json").pipe(
        map(response => response["-O8hJFpM2_4Fr7pvti22"])
    );
  }

  getCocktailListByIngredient$(ingredientName: string): Observable<CocktailListItem[]> {
    return this.http.get<{ drinks: CocktailListItem[] }>(
        `${this.apiUrl}/filter.php`,
        { params: { i: ingredientName } }
    ).pipe(
        map(data => data.drinks)
    );
  }

  getCocktailDetails$(id: string): Observable<CocktailDetails> {
    return this.http.get<{ drinks: CocktailDetailsResponse[] }>(
        `${this.apiUrl}/lookup.php`,
        { params: { i: id } }
    ).pipe(
        map(data => data.drinks[0]),
        map((cocktailDetails: CocktailDetailsResponse) => {
          const ingredientList: CocktailDetails["ingredientList"] = [];
          for (let i = 1; i <= 15; i++) {
            const ingredientName = cocktailDetails[`strIngredient${i}` as keyof CocktailDetailsResponse];
            const ingredientMeasure = cocktailDetails[`strMeasure${i}` as keyof CocktailDetailsResponse];
            if (ingredientName && ingredientMeasure) ingredientList.push({ ingredientName, ingredientMeasure });
            delete cocktailDetails[`strIngredient${i}` as keyof CocktailDetailsResponse];
            delete cocktailDetails[`strMeasure${i}` as keyof CocktailDetailsResponse];
          }
          return { ...cocktailDetails, ingredientList };
        })
    );
  }

  getCocktailFilters$(): Observable<CocktailFilters> {
    return this.http.get<{ drinks: CocktailFiltersResponse["alcoholics"] }>(
        `${this.apiUrl}/list.php`,
        { params: { a: "list" } }
    ).pipe(
        combineLatestWith(
            this.http.get<{ drinks: CocktailFiltersResponse["categories"] }>(
                `${this.apiUrl}/list.php`,
                { params: { c: "list" } }
            ),
            this.http.get<{ drinks: CocktailFiltersResponse["glasses"] }>(
                `${this.apiUrl}/list.php`,
                { params: { g: "list" } }
            )
        ),
        map(filterArray => ({
          alcoholics: filterArray[0].drinks.map(alcoholicObj => alcoholicObj.strAlcoholic),
          categories: filterArray[1].drinks.map(categoryObj => categoryObj.strCategory),
          glasses: filterArray[2].drinks.map(glassObj => glassObj.strGlass)
        }))
    );
  }
}
