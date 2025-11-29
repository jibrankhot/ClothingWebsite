import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const homeRoutes: Routes = [
    { path: 'fashion', component: HomeComponent, title: 'Home Fashion' },
    { path: '', redirectTo: 'fashion', pathMatch: 'full' }
];
