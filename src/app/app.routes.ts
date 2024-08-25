import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'category-detail',
    loadComponent: () => import('./screens/category-detail/category-detail.page').then( m => m.CategoryDetailPage)
  },
];
