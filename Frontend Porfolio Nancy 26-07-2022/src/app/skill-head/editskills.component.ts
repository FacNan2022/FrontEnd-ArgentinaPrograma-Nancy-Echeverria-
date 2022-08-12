import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from '../Model/skills';
import { SerSekillsService } from '../service/serskills.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  skill: Skills=null;
  constructor(private sskills: SerSekillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sskills.detail(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sskills.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar skill");
         this.router.navigate(['']);
      }
    )
  }

}
