import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

    //Echo con Matias
  cargarEducacion(): void{
    this.sEducacion.lista().subscribe(data => { this.edu = data;})
  }
  delete(id?: number){
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
}
