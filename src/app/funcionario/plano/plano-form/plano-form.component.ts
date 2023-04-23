import { categoriasPlanoEnum, tiposPlanoEnum } from './../../../shared/enums';
import { Component, OnInit } from '@angular/core';
import { ComponenteCrudFormBase } from 'src/app/app-arq/componente-crud-form-base';
import { CategoriaPlanoEnum, Plano, TipoPlanoEnum } from '../plano';
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
    this.categorias = CategoriaPlanoEnum;
    this.tipos = TipoPlanoEnum;
  }

  protected configurarFormulario(): void {
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
      odonto: [this.entidade.odonto, Validators.compose([
        Validators.required,
      ])],
      idadeMinima: [this.entidade.idadeMinima, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])],
      idadeMaxima: [this.entidade.idadeMaxima, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])],
      quantidadeConsultasAno: [this.entidade.quantidadeConsultasAno, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])],
      quantidadeExamesAno: [this.entidade.quantidadeExamesAno, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])],
      valorMensalidade: [this.entidade.valorMensalidade, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+(.\d)*$/)
      ])]
    });
  }

  protected override getEnderecoLista(): string {
    return '/planoList';
  }

  protected inicializarEntidade() {
    this.entidade = new Plano();
  }

  protected override preSalvar(): void {
    this.entidade.categoria = Number(this.entidade.categoria);
    this.entidade.tipo = Number(this.entidade.tipo);

    this.entidade.odonto = this.entidade.odonto ?? false;
  }

  protected override preNovo(): void {
    this.entidade.odonto = false;
  }
}
