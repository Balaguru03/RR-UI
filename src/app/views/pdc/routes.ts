import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'PDC'
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadComponent: () => import('./list-pdc/list-pdc.component').then(m => m.ListPdcComponent),
        data: {
          title: 'List PDC\'s'
        }
      },
      {
        path: 'create',
        loadComponent: () => import('./create-and-update/create-and-update.component').then(m => m.CreateAndUpdateComponent),
        data: {
          title: 'Create'
        }
      },
      {
        path: 'update',
        loadComponent: () => import('./create-and-update/create-and-update.component').then(m => m.CreateAndUpdateComponent),
        data: {
          title: 'Update'
        }
      }
    ]
  }
];

