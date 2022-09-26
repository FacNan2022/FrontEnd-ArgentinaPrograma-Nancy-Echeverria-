import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PersonaEdit } from '../Model/PersonaEdit';
import { PersonaService } from '../service/personas.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
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
export class AcercaDeComponent implements OnInit {

  isLogged= false;
  persona: PersonaEdit =new PersonaEdit("","","","","","");

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona= data});
 if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

}
