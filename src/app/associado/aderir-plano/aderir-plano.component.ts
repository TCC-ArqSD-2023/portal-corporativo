import { Component, OnInit } from '@angular/core';
import { CategoriaPlanoEnum, Plano, TipoPlanoEnum } from 'src/app/funcionario/plano/plano';
import { PlanoService } from 'src/app/funcionario/plano/plano.service';
import { Associado } from '../associado/associado';
import { AssociadoService } from '../associado/associado.service';

@Component({
  selector: 'app-aderir-plano',
  templateUrl: './aderir-plano.component.html',
  styleUrls: ['./aderir-plano.component.css']
})
export class AderirPlanoComponent implements OnInit {

  idAssociadoLogado = 1; // Para POC

  associado?: Associado;
  planoAtual?: Plano;
  planos?: Plano[];

  dadosCarregados: boolean = false;

  categorias = CategoriaPlanoEnum;
  tipos = TipoPlanoEnum;

  constructor(private associadoService: AssociadoService, private planoService: PlanoService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  public aderir(planoId: number): void{

    this.associadoService.aderirPlano(this.idAssociadoLogado, planoId).subscribe({
      next: () => {
        this.carregarDados();
      }
    })

    this.dadosCarregados = false;

  }

  private carregarDados(): void{
    this.associadoService.obterPorId(this.idAssociadoLogado).subscribe({
      next: (a) => {
        this.associado = a;

        if(this.associado.planoId)
          this.planoService.obterPorId(this.associado.planoId).subscribe({
            next: (plano) => {
              this.planoAtual = plano;

              this.dadosCarregados = true;
            }
          })
      }
    });

    this.planoService.obter().subscribe({
      next: (planos) => {
        this.planos = planos;
      }
    })
  }



}
