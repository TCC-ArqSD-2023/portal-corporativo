import { Component, OnInit } from "@angular/core";
import { ServicoCrudBase } from "./servico-crud-base";
import { EntidadeBase } from "./entidade-base";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  template: ""
})
export abstract class ComponenteCrudFormBase<T extends EntidadeBase<T>> implements OnInit {

  public formulario!: FormGroup;
  public entidade!: T;

  constructor(
    protected service: ServicoCrudBase<T>,
    protected router: Router,
    protected route: ActivatedRoute,
    protected formBuilder: FormBuilder
  ) {
    this.inicializarEntidade();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.configurarFormulario();

    if (id){
      this.service.obterPorId(parseInt(id!)).subscribe((e) => {
        this.entidade = e;
        this.configurarFormulario();
      })
    }
  }

  salvar(): void {
    Object.assign(this.entidade, this.formulario.value);

    if(this.formulario.valid){
      if(this.entidade.id)
        this.service.editar(this.entidade).subscribe(() => {
          this.router.navigate([this.getEnderecoLista()]);
        });
      else
        this.service.criar(this.entidade).subscribe(() => {
          this.router.navigate([this.getEnderecoLista()]);
        });
    }
  }

  cancelar() {
    this.router.navigate([this.getEnderecoLista()]);
  }

  protected abstract inicializarEntidade(): void;
  protected abstract configurarFormulario(): void;
  protected abstract getEnderecoLista(): string;
}
