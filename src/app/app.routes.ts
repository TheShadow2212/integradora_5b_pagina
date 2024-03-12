import { Routes } from '@angular/router';
import { authGuard } from './auth-guard.guard';

export const routes: Routes = [
    { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    { path: 'home', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent), canActivate: [authGuard]},
    { path: 'register', loadComponent:()=>import('./register-user/register-user.component').then(m=>m.RegisterUserComponent)},
    { path: 'paises' , loadComponent:()=>import('./empleados/empleados.component').then(m=>m.EmpleadosComponent), canActivate: [authGuard]},
    { path: 'paises/update/:id' , loadComponent:()=>import('./paises-update-form/paises-update-form.component').then(m=>m.PaisesUpdateFormComponent), canActivate: [authGuard]},
    { path: 'paises/create' , loadComponent:()=>import('./paises-create-form/paises-create-form.component').then(m=>m.PaisesCreateFormComponent), canActivate: [authGuard]},

];
