import { Injectable } from '@angular/core';
import { ServicoCrudBase } from '../app-arq/servico-crud-base';
import { TipoExame } from './tipo-exame';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoExameService extends ServicoCrudBase<TipoExame>{

  constructor(
    http: HttpClient,
  ){
    super(http, "tipoExame")
  }
}
