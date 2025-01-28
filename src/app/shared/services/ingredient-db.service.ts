import { inject, Injectable, Signal } from '@angular/core';
import { IngredientsApiService } from "./ingredient-api.service";
import { IngredientDetails, IngredientListItem } from "../models/ingredient.model";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class IngredientDbService {
    private ingredientApiService = inject(IngredientsApiService);

    ingredientList: Signal<IngredientListItem[]> = toSignal(this.ingredientApiService.getIngredientList$(), { initialValue: [] });

    getIngredientDetails(name: string): Signal<IngredientDetails | null> {
        return toSignal(this.ingredientApiService.getIngredientDetails$(name), { initialValue: null });
    }
}
