import { Injectable } from '@angular/core';
import { ServicoCrudBase } from '../app-arq/servico-crud-base';
import { Exame } from './exame';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExameService extends ServicoCrudBase<Exame>{

  constructor(
    http: HttpClient,
  ){
    super(http, "exame")
  }
}
