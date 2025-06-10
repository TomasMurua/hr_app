import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'payslips',
        loadComponent: () =>
          import('../payslips/payslips.page').then((m) => m.PayslipsPage),
      },
      {
        path: 'requests',
        loadComponent: () =>
          import('../requests/requests.page').then((m) => m.RequestsPage),
      },
      {
        path: 'documents',
        loadComponent: () =>
          import('../documents/documents.page').then((m) => m.DocumentsPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
