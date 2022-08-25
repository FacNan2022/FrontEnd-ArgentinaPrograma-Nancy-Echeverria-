import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Skills } from '../Model/skills';
import { SerSekillsService } from '../service/serskills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skill-head',
  templateUrl: './skill-head.component.html',
  styleUrls: ['./skill-head.component.css'],
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
export class SkillHeadComponent implements OnInit {
  SKI: Skills[] = [];
  skills: Skills =null;
  constructor(private serKills: SerSekillsService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
    isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.serKills.lista().subscribe(data => {this.SKI=data;})
   
   }
   delete(id?: number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el skills",
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
       this.serKills.delete(id).subscribe(data =>{
         this.cargarSkill();
       },err => {
         alert("No se pudo borrar Skill");
       })
     }
   }
 
 })
}
}


