import { EntidadeBase } from "../app-arq/entidade-base";
import { Associado } from "../associado/associado/associado";
import { SituacaoAtendimentoEnum } from "../shared/situacao-atendimento-enum";
import { Conveniado } from "./conveniado";
import { TipoExame } from "./tipo-exame";

export class Exame extends EntidadeBase<Exame>{
  inicio?: Date;
  fim?: Date;
  tipoExame?: TipoExame;
  conveniado?: Conveniado;
  paciente?: Associado;
  situacao?: SituacaoAtendimentoEnum;

  tipoExameId?: number;
  conveniadoId?: number;
  pacienteId?: number;
}
