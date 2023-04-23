import { EntidadeBase } from "src/app/app-arq/entidade-base";

export class Plano extends EntidadeBase<Plano>{
  nome?: string
  codigoAns?: string
  categoria?: CategoriaPlanoEnum
  tipo?: TipoPlanoEnum
  odonto?: boolean
  idadeMinima?: number
  idadeMaxima?: number
  quantidadeConsultasAno?: number
  quantidadeExamesAno?: number
  valorMensalidade?: number
}

export enum CategoriaPlanoEnum{
  Individual = 0,
  Empresarial
}

export enum TipoPlanoEnum {
  Enfermaria = 0,
  Apartamento,
  Vip
}
