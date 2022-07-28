import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
/*Vamos fazer o import do FormsModule*/
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    /*Vamos fazer o import do FormsModule para conseguirmos utilizar a diretiva "ngModel" e, por conseguinte, fazer o "two-way data binding"*/
    FormsModule
  ]
})
export class CarrinhoModule { }
