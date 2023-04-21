import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EspecialidadeService } from '../especialidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.css']
})
export class EspecialidadeFormComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: EspecialidadeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['']
    });
  }

  salvar(): void {
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/especialidadeList']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/especialidadeList']);
  }
}
