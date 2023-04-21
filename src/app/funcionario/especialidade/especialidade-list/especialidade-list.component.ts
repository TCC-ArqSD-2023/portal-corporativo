import { EspecialidadeService } from '../especialidade.service';
import { Especialidade } from './../especialidade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-list',
  templateUrl: './especialidade-list.component.html',
  styleUrls: ['./especialidade-list.component.css'],
})
export class EspecialidadeListComponent implements OnInit {
  atualizandoLista: boolean = false;
  especialidades: Especialidade[] = [];

  constructor(private service: EspecialidadeService) {}

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar(): void {
    this.atualizandoLista = true;
    this.especialidades = [];

    this.service.listar().subscribe((lista) => {
      this.atualizandoLista = false;
      this.especialidades = lista;
    });
  }
}
