import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
 /*Vamos importar o "formsModule" para a gente conseguir fazer o "two-way data binding"*/
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    /*Vamos importar o "formsModule" para a gente conseguir trabalhar com o "ngModel" e, por conseguinte, conseguir fazer o "two-way data binding"*/
    FormsModule
  ]
})
export class ProdutosModule { }
