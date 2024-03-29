import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IngredientListItem } from "../../../shared/models/ingredient.model";
import { getIngredientList, State } from "../state/ingredients.reducer";
import * as IngredientActions from "../state/ingredients.actions";

@Component({
    selector: "htm-ingredient-list",
    templateUrl: "./ingredient-list.component.html",
    styleUrls: ["./ingredient-list.component.scss"]
})
export class IngredientListComponent implements OnInit {

    allIngredientsList$: Observable<IngredientListItem[]> = this.store.select(getIngredientList);

    constructor(private store: Store<State>) {
    }

    ngOnInit(): void {
        this.store.dispatch(IngredientActions.loadIngredientList());
    }

    addChosenIngredient(ingredientName: string) {
        this.store.dispatch(IngredientActions.addToChosenIngredientList({ ingredientName }));
    }

    addToStopList(ingredientName: string) {
        this.store.dispatch(IngredientActions.addToStopList({ ingredientName }));
    }

    addFavouriteIngredient(ingredientName: string) {
        this.store.dispatch(IngredientActions.addToFavouriteIngredientList({ ingredientName }));
    }

}
