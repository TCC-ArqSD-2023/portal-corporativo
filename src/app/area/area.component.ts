import { MenuArea, MenuService } from './../app-services/menu.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  area: string = '';
  menu!: MenuArea;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.area = this.route.snapshot.paramMap.get('area') ?? '';

    if (this.area)
      switch (this.area) {
        case 'associado':
          this.menu = this.menuService.menuAssociado;
          break;
        case 'funcionario':
          this.menu = this.menuService.menuFuncionario;
          break;
        case 'prestador':
          this.menu = this.menuService.menuPrestador;
          break;
        case 'conveniado':
          this.menu = this.menuService.menuConveniado;
          break;

        default:
          this.router.navigate(['/']);
          break;
      }
  }
}
