import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { EditExperienciaComponent } from './experiencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencia-laboral/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaeducacion', component: NewEducacionComponent},
  { path: 'editeducacion/:id', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
