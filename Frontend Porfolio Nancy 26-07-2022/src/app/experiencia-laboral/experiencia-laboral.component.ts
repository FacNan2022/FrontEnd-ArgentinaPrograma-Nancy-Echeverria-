import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../Model/experiencia';
import { SExperienciaServiceService } from '../service/sexperiencia-service.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaServiceService, private tokenService: TokenService) { }
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
   this.sExperiencia.list().subscribe(data => {this.expe=data;})
  
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
