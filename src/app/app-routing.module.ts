import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'cocktails',
        loadChildren: () =>
            import('./pages/cocktails/cocktails.module').then(
                (m) => m.CocktailsModule
            ),
    },
    {
        path: 'favourite-cocktails',
        loadChildren: () =>
            import('./pages/favourite-cocktails/favourite-cocktails.module').then(
                (m) => m.FavouriteCocktailsModule
            ),
    },
    {
        path: 'favourite-ingredients',
        loadChildren: () =>
            import('./pages/favourite-ingredients/favourite-ingredients.module').then(
                (m) => m.FavouriteIngredientsModule
            ),
    },
    {
        path: 'ingredients',
        loadChildren: () =>
            import('./pages/ingredients/ingredients.module').then(
                (m) => m.IngredientsModule
            ),
    },
    {
        path: 'log-in',
        loadChildren: () =>
            import('./pages/log-in/log-in.module').then((m) => m.LogInModule),
    },
    {
        path: 'stop-list',
        loadChildren: () =>
            import('./pages/stop-list/stop-list.module').then(
                (m) => m.StopListModule
            ),
    },
    { path: '', redirectTo: 'ingredients', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
