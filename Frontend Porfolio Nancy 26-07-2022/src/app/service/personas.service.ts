import{Injectable} from '@angular/core';
import{HttpClient, HttpClientModule} from'@angular/common/http';
import { Observable } from 'rxjs';
import {persona} from '../Model/persona.model';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/personas/';
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
