import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../Model/educacion';
import { SEducacionService } from '../service/seducacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  institucion: string= '';
  titulo: string= '';
  orientacion: string= '';
  fechaInicio: string= '';
  fechaFinalizacion: string= '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu= new Educacion(this.institucion, this.titulo, this.orientacion, this.fechaInicio, this.fechaFinalizacion);
    this.sEducacion.save(edu).subscribe(data => {
      alert("Educacion añadida")
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    
    )
  }

}
