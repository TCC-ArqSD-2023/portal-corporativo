import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EspecialidadeListComponent } from './funcionario/especialidade/especialidade-list/especialidade-list.component';
import { EspecialidadeFormComponent } from './funcionario/especialidade/especialidade-form/especialidade-form.component';
import { AreaComponent } from './area/area.component';
import { PlanoListComponent } from './funcionario/plano/plano-list/plano-list.component';
import { PlanoFormComponent } from './funcionario/plano/plano-form/plano-form.component';
import { EnumToArrayPipe } from './shared/enums';
import { AderirPlanoComponent } from './associado/aderir-plano/aderir-plano.component';
import { ExameListComponent } from './conveniado/exame/exame-list/exame-list.component';
import { ExameFormComponent } from './conveniado/exame/exame-form/exame-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendarExameComponent } from './associado/agendar-exame/agendar-exame.component';
import { AutorizarExameComponent } from './funcionario/autorizar-exame/autorizar-exame.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    EnumToArrayPipe,
    AppComponent,
    HomeComponent,
    EspecialidadeListComponent,
    EspecialidadeFormComponent,
    AreaComponent,
    PlanoListComponent,
    PlanoFormComponent,
    AderirPlanoComponent,
    ExameListComponent,
    ExameFormComponent,
    AgendarExameComponent,
    AutorizarExameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
