import { Component, OnInit } from '@angular/core';
import { ComponenteCrudListBase } from 'src/app/app-arq/componente-crud-list-base';
import { Exame } from '../exame';
import { ExameService } from '../exame.service';
import { TipoExameService } from '../tipo-exame.service';
import { TipoExame } from '../tipo-exame';
import { SituacaoAtendimentoEnum } from 'src/app/shared/situacao-atendimento-enum';

@Component({
  selector: 'app-exame-list',
  templateUrl: './exame-list.component.html',
  styleUrls: ['./exame-list.component.css'],
})
export class ExameListComponent extends ComponenteCrudListBase<Exame> {
  tiposExames: TipoExame[] = [];
  situacoesExames = SituacaoAtendimentoEnum

  constructor(service: ExameService, private tipoExameService: TipoExameService) {
    super(service);
  }

  override ngOnInit(): void {
    this.tipoExameService.obter().subscribe({
      next: (tiposExames) => {
        this.tiposExames = tiposExames;
        this.atualizar();
      }
    })

  }

  protected override comparar(a: Exame, b: Exame): number {
    return (a.inicio?.getTime() ?? 0) - (b.inicio?.getTime() ?? 0);
  }
}
