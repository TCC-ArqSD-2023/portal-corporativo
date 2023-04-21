export abstract class EntidadeBase<T> {
  public id?: number;

  constructor(entidade?: Partial<T>) {
    if(entidade){
      Object.assign(this, entidade);
    }
  }

  public toJson(): any{
    return JSON.parse(JSON.stringify(this));
  }
}
