import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/app-services/config.service';
import { Especialidade } from './especialidade';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  private readonly API;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.API = configService.getApiUrl() + "/especialidade";
  }

  obter(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.API);
  }

  obterPorId(id: number): Observable<Especialidade> {
    const url = `${this.API}/${id}`;
    return this.http.get<Especialidade>(url);
  }

  criar(especialidade: Especialidade): Observable<Especialidade> {
    return this.http.post<Especialidade>(this.API, especialidade);
  }

  editar(especialidade: Especialidade): Observable<Especialidade> {
    const url = `${this.API}/${especialidade.id}`;
    return this.http.put<Especialidade>(url, especialidade);
  }

  remover(id: number): Observable<Especialidade> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Especialidade>(url);
  }
}
