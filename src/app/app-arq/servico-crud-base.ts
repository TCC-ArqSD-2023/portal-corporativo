import { HttpClient } from "@angular/common/http";
import { EntidadeBase } from "./entidade-base";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class ServicoCrudBase<T extends EntidadeBase<T>>{

  private readonly apiUrl;

  constructor(
    protected http: HttpClient,
    protected recursoUrl: string,
  ){
    this.apiUrl = `${environment.api.baseUrl}/especialidade`;
  }

  obter(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  obterPorId(id: number): Observable<T>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<T>(url);
  }

  criar(entidade: T): Observable<T>{
    return this.http.post<T>(this.apiUrl, entidade);
  }

  editar(entidade: T): Observable<T>{
    const url = `${this.apiUrl}/${entidade.id}`;
    return this.http.put<T>(url, entidade);
  }

  remover(id: number): Observable<T>{
    const url = `${this.apiUrl}/${id}`;
    if(id)
      return this.http.delete<T>(url);

    throw Error("ID vazio");
  }

}
