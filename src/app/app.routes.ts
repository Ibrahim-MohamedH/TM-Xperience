import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/layout/auth-layout/auth-layout').then(
      (m) => m.AuthLayout
    ),
    children: [],
  }
];
