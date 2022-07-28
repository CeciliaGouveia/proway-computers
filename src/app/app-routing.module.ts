import { NgModule } from '@angular/core';
//Fazendo importação do Router
import { RouterModule, Routes } from '@angular/router';
//Fazendo a importação do "NaoEncontradaComponent", que é onde está a nossa "Página não Encontrada"
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
//Criando as rotas do nosso site

const routes: Routes = [
  /*Vamos criar uma rota "produtos" em "lazing loading"*/
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },

  /*Quero que, quando seja aberta a raiz do site, ele já redirecione para a rota "/produtos"*/
  { path: "", redirectTo: "/produtos", pathMatch: "full" },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },

  /*Vamos acrescentar a rota para "NaoEncontradaComponent"*/
  { path: "**", component: NaoEncontradaComponent }

];

@NgModule({
  declarations: [],
  imports: [
    //vamos importar o "RouterModule" para utilizar o método "forRoot" e dentro dele vamos indicar nossa const "routes" que contém as rotas do nosso site
    RouterModule.forRoot(routes)
  ],
  //Da mesma forma que importamos, nós precisaremos exportar o "RouterModule"
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
