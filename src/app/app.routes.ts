import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';


export const routes: Routes = [
    {path:"",component:HomeComponent, pathMatch:"full",title:"Jest&Supertest"},
    {path:"usuarios",component:UsuariosComponent, pathMatch: "full"}
];
