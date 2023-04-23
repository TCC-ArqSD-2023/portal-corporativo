import { EntidadeBase } from 'src/app/app-arq/entidade-base';
import { Plano } from '../../funcionario/plano/plano';

export class Associado extends EntidadeBase<Associado> {
  nome?: string;
  sobrenome?: string;
  dataNascimento?: Date;
  estadoCivil?: EstadoCivilEnum;
  sexo?: SexoEnum;
  naturalidade?: string;
  naturalidadeCidade?: string;
  numeroDocumento?: string;
  ufDocumento?: UfEnum;
  orgaoDocumento?: string;
  dataEmissaoDocumento?: Date;
  nomeMae?: string;
  nomePai?: string;
  email?: string;
  telefone?: string;
  situacao?: SituacaoAssociadoEnum;
  plano?: Plano;
  planoId?: number;
}

export enum SituacaoAssociadoEnum {
  Ativo = 0,
  Suspenso,
  Inativo,
}

export enum EstadoCivilEnum {
  Solteiro = 0,
  Casado,
  Divorciado,
  Viuvo,
  UniaoEstavel,
}

export enum SexoEnum
{
    Feminino,
    Masculino,
    Outro
}

export enum UfEnum
{
    AC = 0,
    AL,
    AP,
    AM,
    BA,
    CE,
    ES,
    GO,
    MA,
    MT,
    MS,
    MG,
    PA,
    PB,
    PR,
    PE,
    PI,
    RJ,
    RN,
    RS,
    RO,
    RR,
    SC,
    SP,
    SE,
    TO,
    DF
}

