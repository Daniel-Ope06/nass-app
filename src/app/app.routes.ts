import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Home | NASS-EU',
        loadComponent: () => import('./domains/home/home.component').then(c => c.HomeComponent)
    }
];
