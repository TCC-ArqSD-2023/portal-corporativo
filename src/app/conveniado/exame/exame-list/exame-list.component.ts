import { Component } from '@angular/core';
import { ComponenteCrudListBase } from 'src/app/app-arq/componente-crud-list-base';
import { Exame } from '../../exame';
import { ExameService } from '../../exame.service';
import { SituacaoAtendimentoEnum } from 'src/app/shared/situacao-atendimento-enum';

@Component({
  selector: 'app-exame-list',
  templateUrl: './exame-list.component.html',
  styleUrls: ['./exame-list.component.css'],
})
export class ExameListComponent extends ComponenteCrudListBase<Exame> {
  situacoesExames = SituacaoAtendimentoEnum

  constructor(service: ExameService) {
    super(service);
  }

  protected override comparar(a: Exame, b: Exame): number {
    let inicioA = Date.parse(a.inicio?.toString() ?? "");
    let inicioB = Date.parse(b.inicio?.toString() ?? "");

    return inicioA - inicioB;
  }
}
