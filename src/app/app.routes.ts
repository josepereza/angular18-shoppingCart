import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'products', loadComponent:()=> import('./pages/products/products.component')
    },
    {
        path:'details', loadComponent:()=> import('./pages/details/details.component')
    },
    {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout.component'),
      },

      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },

];
