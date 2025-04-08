import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetallesAutosComponent } from './pages/detalles-autos/detalles-autos.component';
import { ListaComponent } from './pages/lista/lista.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Vehiculos', component: ListaComponent},
    { path: 'Vehiculos/:id', component: DetallesAutosComponent}
];
