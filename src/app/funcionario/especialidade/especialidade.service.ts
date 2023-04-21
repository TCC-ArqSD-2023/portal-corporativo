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

  listar(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.API);
  }
}
