import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from '../service/token.service';
@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
isLogged= false;
  constructor(private router:Router, private tokenService: TokenService) {  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }
  onLogOut():void{
    this.tokenService.logOut();
   window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }

}
