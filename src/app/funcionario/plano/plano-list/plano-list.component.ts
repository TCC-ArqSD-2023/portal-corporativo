import { Component, OnInit } from '@angular/core';
import { ComponenteCrudListBase } from 'src/app/app-arq/componente-crud-list-base';
import { CategoriaPlanoEnum, Plano, TipoPlanoEnum } from '../plano';
import { PlanoService } from '../plano.service';

@Component({
  selector: 'app-plano-list',
  templateUrl: './plano-list.component.html',
  styleUrls: ['./plano-list.component.css'],
})
export class PlanoListComponent extends ComponenteCrudListBase<Plano> {
  categorias = CategoriaPlanoEnum;
  tipos = TipoPlanoEnum;

  constructor(service: PlanoService) {
    super(service);
  }

  protected comparar(a: Plano, b: Plano): number {
    return (a.nome?.toLowerCase() ?? '') > (b.nome?.toLowerCase() ?? '')
      ? 1
      : -1;
  }
}
