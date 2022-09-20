import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../Model/experiencia';
import { SExperienciaServiceService } from '../service/sexperiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  puesto:string='';
  descripcionE: string = '';
  fechaInicio:string='';
  fechaFinalizacion:string='';
  

  constructor(private sExperiencia: SExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.puesto, this.descripcionE, this.fechaInicio, this.fechaFinalizacion);
    this.sExperiencia.save(expe).subscribe(
     data =>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
     }, err =>{
      alert("Falló");
      this.router.navigate(['']);
     } 
    )
  }

}
