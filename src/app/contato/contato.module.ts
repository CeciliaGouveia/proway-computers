import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
/*Fazendo importação do "ReactiveFormsModule"*/
import { ReactiveFormsModule } from '@angular/forms';
/*Vamos importar a biblioteca "ngx-mask"*/
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    /*Vamos fazer a importação do ReactiveFormsModule*/
    ReactiveFormsModule,
    /*Vamos importar a biblioteca "ngx-mask"*/
    NgxMaskModule.forRoot()
  ]
})
export class ContatoModule { }
