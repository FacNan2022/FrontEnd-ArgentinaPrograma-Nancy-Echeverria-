import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../Model/experiencia';
import { SExperienciaServiceService } from '../service/sexperiencia-service.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css'],
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
export class ExperienciaLaboralComponent implements OnInit {
  expe: Experiencia[] = [];
  expLab: Experiencia =null;

  constructor(private sExperiencia: SExperienciaServiceService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    

  }
 


  cargarExperiencia(): void{
   this.sExperiencia.lista().subscribe(data => {this.expe=data;})
  
  }
  delete(id?: number){
    if(id !=undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      },err => {
        alert("No se pudo borrar la experiencia");
      })
    }
  }

}
