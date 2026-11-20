import { Routes } from '@angular/router';
import { ViewProductos } from './cu/administrar-productos/view-productos/view-productos';
import { ViewServicios } from './cu/administrar-servicios/view-servicios/view-servicios';

export const routes: Routes = [
  { path: 'productos', component: ViewProductos, title: 'Vista de productos' },
  { path: 'servicios', component: ViewServicios, title: 'Vista de servicios' },
  { path: '', redirectTo: 'productos', pathMatch: 'full' }
];

