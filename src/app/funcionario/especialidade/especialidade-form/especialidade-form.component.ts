import { Especialidade } from './../especialidade';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EspecialidadeService } from '../especialidade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.css']
})
export class EspecialidadeFormComponent implements OnInit {

  formulario!: FormGroup;
  especialidade: Especialidade;

  constructor(
    private service: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.especialidade = new Especialidade();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id){
      this.service.obterPorId(parseInt(id!)).subscribe((esp) => {
        console.log("recebi o pacote")
        this.especialidade = esp;
        this.configurarFormulario();
      })
    } else {
      this.configurarFormulario();
    }

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

  private configurarFormulario(): void {
    console.log(this.especialidade)

    this.formulario = this.formBuilder.group({
      nome: [this.especialidade.nome]
    });
  }
}
