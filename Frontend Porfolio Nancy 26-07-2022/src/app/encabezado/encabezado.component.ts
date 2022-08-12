
import { Component, OnInit } from '@angular/core';
import{PersonaService} from 'src/app/service/personas.service';
import { PersonaEdit } from '../Model/PersonaEdit';

import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  isLogged= false;
  [x: string]: any;
  persona: PersonaEdit =new PersonaEdit("","","");

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
 