import * as CocktailActions from "./cocktails.actions";
import * as AppState from "../../../state/app.state";
import { CocktailDetails, CocktailFilters, CocktailListItem } from "../../../shared/models/cocktail.model";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export interface State extends AppState.State {
    cocktailState: CocktailState;
}

export interface CocktailState {
    allCocktailsList: CocktailDetails[];
    cocktailFilters: CocktailFilters;
    filteredCocktailList: CocktailDetails[];
    cocktailListByIngredient: CocktailListItem[];
    cocktailDetails: CocktailDetails | null;
    favouriteCocktailList: CocktailListItem[];
}

const initialState: CocktailState = {
    allCocktailsList: [],
    cocktailFilters: { alcoholics: [], categories: [], glasses: [] },
    filteredCocktailList: [],
    cocktailListByIngredient: [],
    cocktailDetails: null,
    favouriteCocktailList: [
        {
            strDrink: "A1",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
            idDrink: "17222"
        },
        {
            strDrink: "ABC",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
            idDrink: "13501"
        }
    ]
};

// Selectors
const getCocktailFeatureState = createFeatureSelector<CocktailState>("cocktails");

export const getCocktailsList = createSelector(
    getCocktailFeatureState,
    state => state.filteredCocktailList.length ? state.filteredCocktailList : state.allCocktailsList
);
export const getCocktailFilters = createSelector(
    getCocktailFeatureState,
    state => state.cocktailFilters
);
export const getCocktailListByIngredient = createSelector(
    getCocktailFeatureState,
    state => state.cocktailListByIngredient
);
export const getCocktailDetails = createSelector(
    getCocktailFeatureState,
    state => state.cocktailDetails
);
export const getFavouriteCocktailList = createSelector(
    getCocktailFeatureState,
    state => state.favouriteCocktailList
);

export const cocktailsReducer = createReducer(
    initialState,
    // LOAD ALL COCKTAILS LIST
    on(CocktailActions.loadAllCocktailsListSuccess, (state, { allCocktailsList }): CocktailState => {
        return {
            ...state,
            allCocktailsList
        };
    }),
    // LOAD COCKTAIL FILTERS
    on(CocktailActions.loadCocktailFiltersSuccess, (state, { cocktailFilters }): CocktailState => {
        return {
            ...state,
            cocktailFilters
        };
    }),
    // COCKTAIL FILTERS CHANGE
    on(CocktailActions.cocktailFiltersChanged, (state, { cocktailFilters }): CocktailState => {
        let filteredCocktailList: CocktailDetails[] = state.allCocktailsList;

        if (cocktailFilters.alcoholics[0]) {
            filteredCocktailList = filteredCocktailList.filter(cocktail => cocktailFilters.alcoholics.includes(cocktail.strAlcoholic));
        }

        if (cocktailFilters.categories[0]) {
            filteredCocktailList = filteredCocktailList.filter(cocktail => cocktailFilters.categories.includes(cocktail.strCategory));
        }

        if (cocktailFilters.glasses[0]) {
            filteredCocktailList = filteredCocktailList.filter(cocktail => cocktailFilters.glasses.includes(cocktail.strGlass));
        }

        return {
            ...state,
            filteredCocktailList
        };
    }),
    // LOAD COCKTAIL LIST BY INGREDIENT
    on(CocktailActions.loadCocktailListByIngredientSuccess, (state, { cocktailList }): CocktailState => {
        return {
            ...state,
            cocktailListByIngredient: cocktailList
        };
    }),
    // LOAD COCKTAIL DETAILS
    on(CocktailActions.loadCocktailDetailsSuccess, (state, { cocktailDetails }): CocktailState => {
        return {
            ...state,
            cocktailDetails
        };
    }),
    // FAVOURITE COCKTAIL LIST
    on(CocktailActions.addToFavouriteCocktailList, (state, { newCocktail }): CocktailState => {
        return state.favouriteCocktailList.some(cocktail => cocktail.idDrink === newCocktail.idDrink) ? state :
            {
                ...state,
                favouriteCocktailList: [...state.favouriteCocktailList, newCocktail]
            };
    }),
    on(CocktailActions.removeFromFavouriteCocktailList, (state, { cocktailToRemove }): CocktailState => {
        return {
            ...state,
            favouriteCocktailList: state.favouriteCocktailList.filter(cocktail => cocktail.idDrink !== cocktailToRemove.idDrink)
        };
    }),
    on(CocktailActions.clearFavouriteCocktailList, (state): CocktailState => {
        return {
            ...state,
            favouriteCocktailList: []
        };
    })
);
