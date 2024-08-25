import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.tab').then((m) => m.HomeTab),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./products/products.tab').then((m) => m.ProductsTab),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.tab').then((m) => m.CartTab),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./cart/cart.tab').then((m) => m.CartTab),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
