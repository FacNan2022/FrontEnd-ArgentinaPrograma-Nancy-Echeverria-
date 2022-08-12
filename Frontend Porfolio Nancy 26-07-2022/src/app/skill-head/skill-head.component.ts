import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from '../Model/skills';
import { SerSekillsService } from '../service/serskills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skill-head',
  templateUrl: './skill-head.component.html',
  styleUrls: ['./skill-head.component.css']
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
     if(id !=undefined){
       this.serKills.delete(id).subscribe(data =>{
         this.cargarSkill();
       },err => {
         alert("No se pudo borrar Skill");
       })
     }
   }
 
 }


