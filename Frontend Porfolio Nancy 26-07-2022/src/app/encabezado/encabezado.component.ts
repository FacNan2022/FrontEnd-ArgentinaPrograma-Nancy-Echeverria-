
import { Component, OnInit } from '@angular/core';
import{PersonaService} from 'src/app/service/personas.service';
import { persona } from '../Model/persona.model';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  [x: string]: any;
  persona: persona =new persona("","","");
  constructor(public personaService: PersonaService) { }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona= data})
  }
 
}
