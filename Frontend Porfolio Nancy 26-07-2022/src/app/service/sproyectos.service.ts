import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../Model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class SProyectosService {
  [x: string]: any;
  URL = 'http://localhost:8080/proyectos/';
  constructor(private httpClient: HttpClient) { }

  public lista ():Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
       
  }
  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }
  public save(Proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Proyectos);
  }
  public update(id: number, Proyectos: Proyectos):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Proyectos);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  } 
}


