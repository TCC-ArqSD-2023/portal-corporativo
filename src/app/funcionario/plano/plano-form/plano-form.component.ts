import { Component, OnInit } from '@angular/core';
import { ComponenteCrudFormBase } from 'src/app/app-arq/componente-crud-form-base';
import { Plano } from '../plano';
import { PlanoService } from '../plano.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-plano-form',
  templateUrl: './plano-form.component.html',
  styleUrls: ['./plano-form.component.css']
})
export class PlanoFormComponent extends ComponenteCrudFormBase<Plano> {

  constructor(
    service: PlanoService,
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    super(service, router, route, formBuilder);
  }

  protected configurarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [this.entidade.nome, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
    });
  }

  protected override getEnderecoLista(): string {
    return '/planoList';
  }

  protected inicializarEntidade() {
    this.entidade = new Plano();
  }

}
