import { Injectable } from '@angular/core';
import { ServicoCrudBase } from '../app-arq/servico-crud-base';
import { Exame } from './exame';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExameService extends ServicoCrudBase<Exame>{

  constructor(
    http: HttpClient,
  ){
    super(http, "exame")
  }

  agendarExame(exameId: number, pacienteId: number): Observable<Exame>{
    return this.http.post<Exame>(this.apiUrl+"/agendar", {exameId, pacienteId});
  }
}
