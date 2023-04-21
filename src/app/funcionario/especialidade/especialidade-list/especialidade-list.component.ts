import { EspecialidadeService } from '../especialidade.service';
import { Especialidade } from './../especialidade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-list',
  templateUrl: './especialidade-list.component.html',
  styleUrls: ['./especialidade-list.component.css']
})
export class EspecialidadeListComponent implements OnInit {
  especialidades: Especialidade[] = [];

  constructor(private service: EspecialidadeService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      console.log(lista)
      this.especialidades = lista;
    });
  }

}
