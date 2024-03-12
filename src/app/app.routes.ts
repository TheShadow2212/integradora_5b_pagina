import { Routes } from '@angular/router';
import { authGuard } from './auth-guard.guard';

export const routes: Routes = [
    { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    { path: 'home', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent), canActivate: [authGuard]},
    { path: 'register', loadComponent:()=>import('./register-user/register-user.component').then(m=>m.RegisterUserComponent)},
    { path: 'home', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent), canActivate: [authGuard]},
    { path: 'paises' , loadComponent:()=>import('./empleados/empleados.component').then(m=>m.EmpleadosComponent), canActivate: [authGuard]},
    { path: 'paises/update/:id' , loadComponent:()=>import('./paises-update-form/paises-update-form.component').then(m=>m.PaisesUpdateFormComponent), canActivate: [authGuard]},
    { path: 'paises/create' , loadComponent:()=>import('./paises-create-form/paises-create-form.component').then(m=>m.PaisesCreateFormComponent), canActivate: [authGuard]},
    { path: 'regiones', loadComponent:()=>import('./regiones/regiones.component').then(m=>m.RegionesComponent), canActivate: [authGuard]},
    { path: 'ciudades', loadComponent:()=>import('./ciudades/ciudades.component').then(m=>m.CiudadesComponent), canActivate: [authGuard]},
    { path: 'distritos', loadComponent:()=>import('./distritos/distritos.component').then(m=>m.DistritosComponent), canActivate: [authGuard]},
    { path: 'barrios', loadComponent:()=>import('./barrios/barrios.component').then(m=>m.BarriosComponent), canActivate: [authGuard]},
    { path: 'calles', loadComponent:()=>import('./calles/calles.component').then(m=>m.CallesComponent), canActivate: [authGuard]},
    { path: 'edificios', loadComponent:()=>import('./edificios/edificios.component').then(m=>m.EdificiosComponent), canActivate: [authGuard]},
    { path: 'apartamentos', loadComponent:()=>import('./apartamentos/apartamentos.component').then(m=>m.ApartamentosComponent), canActivate: [authGuard]},
    { path: 'contrato-alquiler', loadComponent:()=>import('./contrato-alquiler/contrato-alquiler.component').then(m=>m.ContratoAlquilerComponent), canActivate: [authGuard]},
    { path: 'inquilinos', loadComponent:()=>import('./inquilinos/inquilinos.component').then(m=>m.InquilinosComponent), canActivate: [authGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];
