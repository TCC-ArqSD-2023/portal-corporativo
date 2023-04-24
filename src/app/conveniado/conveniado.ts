import { EntidadeBase } from "../app-arq/entidade-base";

export class Conveniado extends EntidadeBase<Conveniado>{
  nome?: string;
  telefone?: string;
  enderecoId?: number;
}
