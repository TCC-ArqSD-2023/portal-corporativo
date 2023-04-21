import { ComponenteCrudListBase } from 'src/app/app-arq/componente-crud-list-base';
import { EspecialidadeService } from '../especialidade.service';
import { Especialidade } from './../especialidade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-list',
  templateUrl: './especialidade-list.component.html',
  styleUrls: ['./especialidade-list.component.css'],
})
export class EspecialidadeListComponent extends ComponenteCrudListBase<Especialidade> {
  constructor(service: EspecialidadeService) {
    super(service);
  }

  protected comparar(a: Especialidade, b: Especialidade): number {
    return (a.nome?.toLowerCase() ?? '') > (b.nome?.toLowerCase() ?? '')
      ? 1
      : -1;
  }
}
