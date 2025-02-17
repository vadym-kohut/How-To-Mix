import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IngredientDetails, IngredientListItem, IngredientListResponse } from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService {
  private http = inject(HttpClient);
  private apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";

  getIngredientList$(): Observable<IngredientListItem[]> {
    return this.http.get<IngredientListResponse>(`${this.apiUrl}/list.php`,
        { params: { i: "list" } }).pipe(
        map(response => response.drinks)
    );
  }

  getIngredientDetails$(name: string): Observable<IngredientDetails> {
    return this.http.get<{ ingredients: IngredientDetails[] }>(
        `${this.apiUrl}/search.php`,
        { params: { i: name } }
    ).pipe(
        map(response => response.ingredients[0])
    );
  }
}
