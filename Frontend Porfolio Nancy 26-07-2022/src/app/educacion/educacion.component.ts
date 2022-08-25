import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Educacion } from '../Model/educacion';
import { SEducacionService } from '../service/seducacion.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
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
export class EducacionComponent implements OnInit {
  edu: Educacion[]=[];
  eduC: Educacion =null;
  public deleteEducacion: Educacion | undefined;
  public editEducacion: Educacion | undefined;
  constructor(private sEducacion: SEducacionService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    isLogged= false;

  
  ngOnInit(): void {
    
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }


  cargarEducacion(): void{
    this.sEducacion.lista().subscribe(data => { this.edu = data;})
  }
  delete(id?: number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la educacion",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }
})
 }
}