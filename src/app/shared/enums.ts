import { Pipe, PipeTransform } from '@angular/core';
import { CategoriaPlanoEnum, TipoPlanoEnum } from './../funcionario/plano/plano';

export const categoriasPlanoEnum = Object.keys(CategoriaPlanoEnum).filter(f => isNaN(Number(f)));
export const tiposPlanoEnum = Object.keys(TipoPlanoEnum).filter(f => isNaN(Number(f)));


@Pipe({name: 'enumToArray'})
export class EnumToArrayPipe implements PipeTransform {
  transform(value: { [x: string]: any; }) : any {
    return Object.keys(value).filter(e => !isNaN(+e)).map(o => { return {id: +o, valor: value[o]}});
  }
}
