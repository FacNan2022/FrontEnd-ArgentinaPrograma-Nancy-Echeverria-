import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaEdit } from '../Model/PersonaEdit';



@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  [x: string]: any;
  URL = 'http://localhost:8080/personas/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<PersonaEdit[]> {
    return this.httpClient.get<PersonaEdit[]>(this.URL + 'lista');
  }

  public getPersona(): Observable<PersonaEdit> {
    return this.httpClient.get<PersonaEdit>(this.URL + 'traer/perfil');
  }

  public save(persona: PersonaEdit): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', persona);
  }
  public update(id: number, persona: PersonaEdit): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }
  public detail(id: number): Observable<PersonaEdit> {
    return this.httpClient.get<PersonaEdit>(this.URL + `detail/${id}`);
  }
}
