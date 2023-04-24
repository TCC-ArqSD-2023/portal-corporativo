import { EntidadeBase } from "../app-arq/entidade-base";
import { Associado } from "../associado/associado/associado";
import { Conveniado } from "./conveniado";
import { TipoExame } from "./tipo-exame";

export class Exame extends EntidadeBase<Exame>{
  inicio?: Date;
  fim?: Date;
  tipoExame?: TipoExame;
  conveniado?: Conveniado;
  paciente?: Associado;
  situacao?: Date;

  tipoExameId?: number;
  conveniadoId?: number;
  pacienteId?: number;
}
