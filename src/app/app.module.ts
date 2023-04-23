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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
