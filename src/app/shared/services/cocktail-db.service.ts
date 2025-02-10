import { inject, Injectable, Signal } from '@angular/core';
import { CocktailApiService } from "./cocktail-api.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { CocktailDetails, CocktailFilters, CocktailListItem } from "../models/cocktail.model";

@Injectable({
    providedIn: 'root'
})
export class CocktailDbService {
    private cocktailApiService = inject(CocktailApiService);

    allCocktailsList: Signal<CocktailDetails[]> = toSignal(this.cocktailApiService.getAllCocktailsList$(), { initialValue: [] });
    cocktailFilters: Signal<CocktailFilters> = toSignal(this.cocktailApiService.getCocktailFilters$(),
        { initialValue: { alcoholics: [], glasses: [], categories: [] } }
    );

    getCocktailListByIngredient(ingredientName: string): Signal<CocktailListItem[]> {
        return toSignal(this.cocktailApiService.getCocktailListByIngredient$(ingredientName), { initialValue: [] });
    }

    getCocktailDetails(id: string): Signal<CocktailDetails | null> {
        return toSignal(this.cocktailApiService.getCocktailDetails$(id), { initialValue: null });
    }
}
