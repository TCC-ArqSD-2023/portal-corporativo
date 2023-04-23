import { Injectable } from '@angular/core';
import { ServicoCrudBase } from 'src/app/app-arq/servico-crud-base';
import { Associado } from './associado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService extends ServicoCrudBase<Associado>{

  constructor(
    http: HttpClient,
  ){
    super(http, "associado")
  }

  aderirPlano(associadoId: number, planoId: number): Observable<any>{

    const url = `${this.apiUrl}/aderirPlano`;
    return this.http.post(url, {
      "associadoId": associadoId,
      "planoId": planoId
    });
  }
}
