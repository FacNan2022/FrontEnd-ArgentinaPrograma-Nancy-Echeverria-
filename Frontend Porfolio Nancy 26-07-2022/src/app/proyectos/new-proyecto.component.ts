import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../Model/proyectos';
import { SProyectosService } from '../service/sproyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  imagen: string;
  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const pro = new Proyectos(this.nombre, this.descripcion, this.imagen);
    this.sProyectos.save(pro).subscribe(
     data =>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
     }, err =>{
      alert("Falló");
      this.router.navigate(['']);
     } 
    )
  }

}


