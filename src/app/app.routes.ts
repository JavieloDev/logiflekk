import {Routes} from '@angular/router';
import {Form} from './feature/form/form';
import {CompromisosTable} from './feature/compromisos-table/compromisos-table';

export const routes: Routes = [
  {
    path: '',
    component: Form
  },
  {
    path: 'compromisos',
    component: CompromisosTable
  },
  {
    path: '**',
    redirectTo: '',
  }
];
