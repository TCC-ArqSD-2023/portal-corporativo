import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidade } from './especialidade';
import { ServicoCrudBase } from 'src/app/app-arq/servico-crud-base';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService extends ServicoCrudBase<Especialidade> {

  constructor(
    http: HttpClient,
  ){
    super(http, "")
  }
}
