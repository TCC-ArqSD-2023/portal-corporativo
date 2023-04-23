import { Component, OnInit } from "@angular/core";
import { ServicoCrudBase } from "./servico-crud-base";
import { EntidadeBase } from "./entidade-base";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, ValidationErrors } from "@angular/forms";

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

    this.preSalvar();
    console.log(this.entidade);


    if(this.formulario.valid){
      if(this.entidade.id)
        this.service.editar(this.entidade).subscribe(() => {
          this.router.navigate([this.getEnderecoLista()]);
        });
      else
        this.service.criar(this.entidade).subscribe(() => {
          this.router.navigate([this.getEnderecoLista()]);
        });
    } else {
      alert('Dados inválidos.\n\n' + this.getFormValidationErrors().join("\n"))
    }
  }

  cancelar() {
    this.router.navigate([this.getEnderecoLista()]);
  }

  protected abstract inicializarEntidade(): void;
  protected abstract configurarFormulario(): void;
  protected abstract getEnderecoLista(): string;

  private getFormValidationErrors(): string[] {
    let erros: string[] = [];
    Object.keys(this.formulario.controls).forEach(key => {
      const controlErrors = this.formulario!.get(key)!.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
         erros.push('Campo: \'' + key + '\', erro: ' + keyError + ', valor: ', controlErrors[keyError]);
        });
      }
    });

    return erros;
  }

  protected preSalvar(): void {
  }
}

