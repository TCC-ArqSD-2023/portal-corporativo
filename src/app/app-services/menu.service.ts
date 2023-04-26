import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuAssociado: MenuArea;
  public menuFuncionario: MenuArea;
  public menuPrestador: MenuArea;
  public menuConveniado: MenuArea;

  constructor() {
    this.menuAssociado = this.construirMenuAssociado();
    this.menuFuncionario = this.construirMenuFuncionario();
    this.menuPrestador = this.construirMenuPrestador();
    this.menuConveniado = this.construirMenuConveniado();
   }

  private construirMenuAssociado(): MenuArea{
    const listaMenus = [
      new MenuItem('file-earmark-medical-fill', 'Aderir plano', '/aderir-plano'),
      new MenuItem('calendar3', 'Agendar consulta', '/agendar-consulta'),
      new MenuItem('calendar-heart', 'Agendar exame', '/agendar-exame'),
    ]
    return new MenuArea("Associado", listaMenus);
  }
  private construirMenuFuncionario(): MenuArea{
    const listaMenus = [
      new MenuItem('prescription2', 'Especialidades', '/especialidadeList'),
      new MenuItem('file-earmark-medical-fill', 'Planos', '/planoList')
    ]
    return new MenuArea("Funcionário", listaMenus);
  }
  private construirMenuPrestador(): MenuArea{
    const listaMenus = [
      new MenuItem('chat-heart', 'Consultas', '/')
    ]
    return new MenuArea("Prestador", listaMenus);
  }
  private construirMenuConveniado(): MenuArea{
    const listaMenus = [
      new MenuItem('clipboard-pulse', 'Exames', '/exameList')
    ]
    return new MenuArea("Conveniado", listaMenus);
  }

}

export class MenuItem {
  constructor(public icone: string, public nome: string, public destino: string){}

}

export class MenuArea {
  constructor(public nome: string, public menuItens?: MenuItem[]) {

  }
}
