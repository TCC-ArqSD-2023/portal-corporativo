import { Injectable } from '@angular/core';
import { ServicoCrudBase } from '../app-arq/servico-crud-base';
import { Conveniado } from './conveniado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConveniadoService extends ServicoCrudBase<Conveniado>{

  constructor(
    http: HttpClient,
  ){
    super(http, "conveniado")
  }
}
