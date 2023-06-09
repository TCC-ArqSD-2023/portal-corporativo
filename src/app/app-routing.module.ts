import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EspecialidadeListComponent } from './funcionario/especialidade/especialidade-list/especialidade-list.component';
import { EspecialidadeFormComponent } from './funcionario/especialidade/especialidade-form/especialidade-form.component';
import { AreaComponent } from './area/area.component';
import { PlanoListComponent } from './funcionario/plano/plano-list/plano-list.component';
import { PlanoFormComponent } from './funcionario/plano/plano-form/plano-form.component';
import { AderirPlanoComponent } from './associado/aderir-plano/aderir-plano.component';
import { ExameListComponent } from './conveniado/exame/exame-list/exame-list.component';
import { ExameFormComponent } from './conveniado/exame/exame-form/exame-form.component';
import { AgendarExameComponent } from './associado/agendar-exame/agendar-exame.component';
import { AutorizarExameComponent } from './funcionario/autorizar-exame/autorizar-exame.component';

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
    path: 'area/:area',
    component: AreaComponent
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
  },
  {
    path: 'planoList',
    component: PlanoListComponent
  },
  {
    path: 'planoForm',
    component: PlanoFormComponent
  },
  {
    path: 'planoForm/:id',
    component: PlanoFormComponent
  },
  {
    path: 'aderir-plano',
    component: AderirPlanoComponent
  },
  {
    path: 'exameList',
    component: ExameListComponent
  },
  {
    path: 'exameForm',
    component: ExameFormComponent
  },
  {
    path: 'exameForm/:id',
    component: ExameFormComponent
  },
  {
    path: 'agendar-exame',
    component: AgendarExameComponent
  },
  {
    path: 'autorizar-exame',
    component: AutorizarExameComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
