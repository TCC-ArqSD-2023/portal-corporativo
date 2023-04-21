import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EspecialidadeListComponent } from './funcionario/especialidade/especialidade-list/especialidade-list.component';
import { EspecialidadeFormComponent } from './funcionario/especialidade/especialidade-form/especialidade-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'especialidadeList',
    component: EspecialidadeListComponent
  },
  {
    path: 'especialidadeForm',
    component: EspecialidadeFormComponent
  },
  {
    path: 'especialidadeForm/:id',
    component: EspecialidadeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
