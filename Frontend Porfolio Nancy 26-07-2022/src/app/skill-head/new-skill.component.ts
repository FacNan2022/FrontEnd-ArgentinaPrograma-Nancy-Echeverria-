import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from '../Model/skills';
import { SerSekillsService } from '../service/serskills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  
 nombre: string =' ';
   imagen:string =' ';
   ColorInterior:string =' ';
    ColorExterno:string =' ';
   porcentaje:number;


  constructor(private sSkills: SerSekillsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const ski = new Skills(this.nombre, this.ColorExterno, this.porcentaje, this.ColorInterior, this.imagen);
    this.sSkills.save(ski).subscribe(data => {
      alert("Skills añadido")
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }

    )
  }

}
