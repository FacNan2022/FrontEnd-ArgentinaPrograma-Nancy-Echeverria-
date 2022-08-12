import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { EditPersonaComponent } from './encabezado/edit-persona.component';
import { EditExperienciaComponent } from './experiencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencia-laboral/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditProyectosComponent } from './proyectos/edit-proyectos.component';
import { NewProyectoComponent } from './proyectos/new-proyecto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RegistroComponent } from './registro/registro.component';
import { EditskillsComponent } from './skill-head/editskills.component';
import { NewSkillComponent } from './skill-head/new-skill.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaeducacion', component: NewEducacionComponent},
  { path: 'editeducacion/:id', component: EditEducacionComponent},
  {  path: 'nuevoproyecto', component: NewProyectoComponent},
  { path: 'editproyectos/:id', component: EditProyectosComponent},
  { path: 'editpersona/:id', component: EditPersonaComponent},
  { path: 'nuevoskills', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditskillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
