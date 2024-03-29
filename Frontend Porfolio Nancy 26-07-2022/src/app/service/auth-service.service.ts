import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../Model/nuevo-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../Model/jwt-dto';
import { LoginUsuario } from '../Model/login-usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  authURL = 'https://backend-argentina-programa-mycr.onrender.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable <any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{

 return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
