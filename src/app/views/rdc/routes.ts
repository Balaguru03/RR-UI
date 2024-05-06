import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'RDC'
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadComponent: () => import('./list/list.component').then(m => m.ListComponent),
        data: {
          title: 'List RDC\'s'
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

