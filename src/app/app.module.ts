import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EspecialidadeListComponent } from './funcionario/especialidade/especialidade-list/especialidade-list.component';
import { ConfigService } from './app-services/config.service';
import { EspecialidadeFormComponent } from './funcionario/especialidade/especialidade-form/especialidade-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EspecialidadeListComponent,
    EspecialidadeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
