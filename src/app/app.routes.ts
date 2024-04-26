import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotasComponent } from './components/rotas/rotas.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClienteComponent } from './components/cliente/cliente.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nova-rota', component: RotasComponent},
  {path: 'cliente/:id', component: ClientDetailComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: '**', component:HomeComponent}
];
