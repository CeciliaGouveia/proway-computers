/*Esse serviço terá acesso à nossa lista de produtos que está no arquivo "produtos.ts" (que imitará o nosso backend)*/

import { Injectable } from '@angular/core';

/*Vamos importar o "IProduto", assim como o "produtos" do nosso arquivo "produtos.ts"*/
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  //Vamos criar uma propriedade chamada "produtos" que receberá as informações existentes no arquivo "produtos.ts"
  produtos: IProduto[] = produtos;

  constructor() {}

  /*Vamos criar um método que retornará a nossa lista de produtos existente na nossa propriedade "produtos"*/
  getAll() {
    return this.produtos;
  }

  /*Método que vai receber o "id" do produto, vai pesquisar nossa propriedade "produtos" e depois vai retornar só o produto que tem aquele "id"*/
  getOne(produtoId: number){
    /*O método "find" servirá para encontrarmos o produto, através de uma condição que nós especificarmos. No nosso caso, nós queremos que o programa encontre um produto cujo "id" seja igual ao valor de "produtoId"*/
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
