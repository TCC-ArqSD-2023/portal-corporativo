import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoCrudBase } from 'src/app/app-arq/servico-crud-base';
import { Plano } from './plano';

@Injectable({
  providedIn: 'root'
})
export class PlanoService extends ServicoCrudBase<Plano> {

  constructor(
    http: HttpClient,
  ){
    super(http, "plano")
  }
}
