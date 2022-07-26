import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { RegistroComponent } from './registro/registro.component';
import { SkillHeadComponent } from './skill-head/skill-head.component';
import { interceptorProvider } from './service/interceptor-service.service';
import { NewExperienciaComponent } from './experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia-laboral/edit-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EducacionComponent,
    EncabezadoComponent,
    ExperienciaLaboralComponent,
    HomeComponent,
    LoginComponent,
    NavegadorComponent,
    RegistroComponent,
    SkillHeadComponent,
    NewExperienciaComponent,
    EditExperienciaComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }