import { Component, OnInit } from "@angular/core";
import { EntidadeBase } from "./entidade-base";
import { ServicoCrudBase } from "./servico-crud-base";

@Component({
  template: ""
})
export abstract class ComponenteCrudListBase<T extends EntidadeBase<T>> implements OnInit{
  atualizandoLista: boolean = false;
  entidades: T[] = [];

  constructor(protected service: ServicoCrudBase<T>){}

  ngOnInit(): void {
    this.onInit();

    this.atualizar();
  }

  protected onInit(): void {
  }

  atualizar(): void {
    this.atualizandoLista = true;

    this.service.obter().subscribe((lista) => {
      this.atualizandoLista = false;
      this.entidades = lista.sort(this.comparar);
    });
  }

  remover(id: number) {
    console.log(id);

    if(id){
      this.service.remover(id).subscribe({
        next: () => this.atualizar(),
        error: () => alert('Esse item não pode ser removido.')
      });
    }
  }

  protected abstract comparar(a: T, b: T): number;
}
