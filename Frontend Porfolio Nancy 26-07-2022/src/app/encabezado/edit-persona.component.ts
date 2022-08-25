
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
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
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas actualizar la persona",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , actualizar',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
      this.service.update(id, this.per).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar Persona");
           this.router.navigate(['']);
        }
      )
    }
  

})
    }
  }