import { Especialidade } from './../especialidade';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspecialidadeService } from '../especialidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponenteCrudFormBase } from 'src/app/app-arq/componente-crud-form-base';

@Component({
  selector: 'app-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.css'],
})
export class EspecialidadeFormComponent extends ComponenteCrudFormBase<Especialidade> {
  constructor(
    service: EspecialidadeService,
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
    return '/especialidadeList';
  }

  protected inicializarEntidade() {
    this.entidade = new Especialidade();
  }
}
