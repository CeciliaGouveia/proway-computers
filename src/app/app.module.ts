import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Vamos fazer a importação do componente que queremos utilizar da biblioteca "Material Angular"*/
import{ MatSnackBarModule} from "@angular/material/snack-bar";
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
/*Vamos fazer a importação do "formsModule"*/
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /*Vamos adicionar o módulo "MatSnackBarModule" para poder utilizá-lo na minha aplicação*/
    MatSnackBarModule,
    /*Vamos fazer o import do "FormModule" para que possamos utilizar o "ngModel" e, por conseguinte, consigamos fazer o "two-way data binding"*/
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
