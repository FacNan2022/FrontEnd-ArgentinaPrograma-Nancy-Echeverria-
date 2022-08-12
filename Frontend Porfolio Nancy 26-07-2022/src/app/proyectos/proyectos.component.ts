import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../Model/proyectos';
import { SProyectosService } from '../service/sproyectos.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  pro: Proyectos[] = [];
  proyectos: Proyectos =null;
  constructor(private sProyectos: SProyectosService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    

  }

  cargarProyecto(): void{
    this.sProyectos.lista().subscribe(data => {this.pro=data;})
   }
   delete(id?: number){
     if(id !=undefined){
       this.sProyectos.delete(id).subscribe(data =>{
         this.cargarProyecto();
       },err => {
         alert("No se pudo borrar el proyecto");
       })
     }
   }
 
 }
 

