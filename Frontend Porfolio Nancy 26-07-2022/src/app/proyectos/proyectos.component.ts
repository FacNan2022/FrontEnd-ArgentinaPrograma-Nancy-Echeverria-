import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Proyectos } from '../Model/proyectos';
import { SProyectosService } from '../service/sproyectos.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations:[
    trigger('enterState', [
      state('void',style({
        transform:'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
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
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el proyecto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
     if(id !=undefined){
       this.sProyectos.delete(id).subscribe(data =>{
         this.cargarProyecto();
       },err => {
         alert("No se pudo borrar el proyecto");
       })
     }
   }
 
 })
}
}
 

