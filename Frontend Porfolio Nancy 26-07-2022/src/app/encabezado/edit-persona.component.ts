
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaEdit } from '../Model/PersonaEdit';
import { PersonaService } from '../service/personas.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  per: PersonaEdit =null;
  constructor(private service: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.service.detail(id).subscribe(
        data =>{
          this.per = data;
        }, err =>{
          alert("Error al modificar persona");
          this.router.navigate(['']);
        }
      )
    }
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.service.update(id, this.per).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar Persona");
           this.router.navigate(['']);
        }
      )
    }
  

}