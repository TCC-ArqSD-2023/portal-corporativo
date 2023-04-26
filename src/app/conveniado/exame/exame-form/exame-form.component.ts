import { Component, OnInit } from '@angular/core';
import { Exame } from '../../exame';
import { ExameService } from '../../exame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ComponenteCrudFormBase } from 'src/app/app-arq/componente-crud-form-base';
import { TipoExameService } from '../../tipo-exame.service';
import { TipoExame } from '../../tipo-exame';
import { SituacaoAtendimentoEnum } from 'src/app/shared/situacao-atendimento-enum';
import { ConveniadoService } from '../../conveniado.service';

@Component({
  selector: 'app-exame-form',
  templateUrl: './exame-form.component.html',
  styleUrls: ['./exame-form.component.css'],
})
export class ExameFormComponent extends ComponenteCrudFormBase<Exame> {
  idConveniado: number = 1;

  tiposExame: TipoExame[] = [];

  constructor(
    service: ExameService,
    router: Router,
    route: ActivatedRoute,
    formBuilder: FormBuilder,
    private tipoExameService: TipoExameService,
    private conveniadoService: ConveniadoService
  ) {
    super(service, router, route, formBuilder);

    tipoExameService.obter().subscribe({
      next: (tipos) => (this.tiposExame = tipos),
    });
  }

  protected override configurarFormulario(): void {
    this.conveniadoService.obterPorId(this.idConveniado).subscribe({
      next: (c) => (this.entidade.conveniado = c),
    });

    let data: Date;
    if (this.entidade.id) {
      this.entidade.tipoExame = this.tiposExame.find(
        (t) => t.id === this.entidade.tipoExameId
      );

      data = new Date(this.entidade.inicio?.toString() ?? '');
      data;
      this.entidade.inicio = new Date(Date.UTC(
        data.getFullYear(),
        data.getMonth(),
        data.getDate(),
        data.getHours(),
        data.getMinutes(),
        0
      ));
    } else {
      data = new Date();
      this.entidade.inicio = new Date(Date.UTC(
        data.getFullYear(),
        data.getMonth(),
        data.getDate(),
        8,
        0,
        0
      ));
    }


    this.formulario = this.formBuilder.group({
      inicio: [this.entidade.inicio?.toISOString().slice(0, -1)],
      fim: [this.entidade.inicio],
      situacao: [this.entidade.situacao],
      tipoExame: [this.entidade.tipoExame],
    });
  }

  protected override inicializarEntidade(): void {
    this.entidade = new Exame();
  }

  protected override preNovo(): void {
    this.entidade.situacao = SituacaoAtendimentoEnum.Aberto;
  }

  protected override preSalvar(): void {
    this.entidade.fim = this.entidade.inicio;
    this.entidade.conveniadoId = this.entidade.conveniado?.id;
    this.entidade.tipoExameId = this.entidade.tipoExame?.id;
  }

  protected override getEnderecoLista(): string {
    return 'exameList';
  }

  private corrigirData(){

  }
}
