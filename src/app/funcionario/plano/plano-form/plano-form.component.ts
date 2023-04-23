import { categoriasPlanoEnum, tiposPlanoEnum } from './../../../shared/enums';
import { Component, OnInit } from '@angular/core';
import { ComponenteCrudFormBase } from 'src/app/app-arq/componente-crud-form-base';
import { CategoriaPlanoEnum, Plano } from '../plano';
import { PlanoService } from '../plano.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-plano-form',
  templateUrl: './plano-form.component.html',
  styleUrls: ['./plano-form.component.css'],
})
export class PlanoFormComponent extends ComponenteCrudFormBase<Plano> {

  categorias;
  tipos;

  constructor(
    service: PlanoService,
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    super(service, router, route, formBuilder);
    this.categorias = categoriasPlanoEnum;
    this.tipos = tiposPlanoEnum;
    console.log(this.categorias);
  }

  protected configurarFormulario(): void {
    console.log(this.entidade);
    this.formulario = this.formBuilder.group({
      nome: [this.entidade.nome, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      codigoAns: [this.entidade.codigoAns, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      categoria: [this.entidade.categoria, Validators.compose([
        Validators.required,
      ])],
      tipo: [this.entidade.tipo, Validators.compose([
        Validators.required,
      ])],
      odonto: [this.entidade.odonto],
      idadeMinima: [this.entidade.idadeMinima],
      idadeMaxima: [this.entidade.idadeMaxima],
      quantidadeConsultasAno: [this.entidade.quantidadeConsultasAno],
      quantidadeExamesAno: [this.entidade.quantidadeExamesAno],
      valorMensalidade: [this.entidade.valorMensalidade]
    });
    console.log(this.formulario.value)
  }

  protected override getEnderecoLista(): string {
    return '/planoList';
  }

  protected inicializarEntidade() {
    this.entidade = new Plano();
  }

  protected override preSalvar(): void {
    this.entidade.tipo = Number(this.entidade.tipo);
    this.entidade.categoria = Number(this.entidade.categoria);
  }

}
