import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home/fashion',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.route').then((m) => m.homeRoutes)
    }
];
