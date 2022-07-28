import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
//Vamos fazer a importação do componente "DetalhesProdutosComponent"
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: "", component: ProdutosComponent },

  //Vamos adicionar a rota que vai servir para a página de "detalhes do produto"
  { path: ":id", component: DetalhesProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
