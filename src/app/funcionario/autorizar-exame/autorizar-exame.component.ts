import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exame } from 'src/app/conveniado/exame';
import { ExameService } from 'src/app/conveniado/exame.service';
import { TipoExame } from 'src/app/conveniado/tipo-exame';
import { TipoExameService } from 'src/app/conveniado/tipo-exame.service';
import { SituacaoAtendimentoEnum } from 'src/app/shared/situacao-atendimento-enum';

@Component({
  selector: 'app-autorizar-exame',
  templateUrl: './autorizar-exame.component.html',
  styleUrls: ['./autorizar-exame.component.css'],
})
export class AutorizarExameComponent implements OnInit {
  pacienteId: number = 1;
  atualizandoLista: boolean = false;
  exames: Exame[] = [];
  tiposExames: TipoExame[] = [];

  filtroTipoExameId!: number;

  constructor(
    private router: Router,
    private exameService: ExameService,
    private tipoExameService: TipoExameService
  ) {}

  ngOnInit(): void {

    this.atualizarExames();

    this.tipoExameService.obter().subscribe({
      next: tes => this.tiposExames = tes
    })

  }

  onChangeTipoExame(): void{
    this.atualizarExames();
  }

  autorizar(exameId: number): void{
    this.exameService.autorizarExame(exameId).subscribe({
      next: () => {
        this.atualizarExames();
      }
    })
  }

  private atualizarExames(): void {
    this.exameService.obter().subscribe({
      next: (es) => {
        this.exames = es.filter(e => e.situacao === SituacaoAtendimentoEnum.AguardandoAutorizacao);
        if(this.filtroTipoExameId)
          this.exames = this.exames.filter(e => e.tipoExameId === this.filtroTipoExameId)
      }
    })
  }
}
