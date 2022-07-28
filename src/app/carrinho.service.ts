import { Injectable } from '@angular/core';
/*Vamos importar a classe "IProdutoCarrinho" que criamos no arquivo "produtos.ts"*/
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  /*Vamos criar uma propriedade que armazenará a quantidade de itens do nosso carrinho. vamos inicializá-la vazia.*/
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  /*Vamos começar a criar os métodos que existirão dentro desse serviço de carrinho. Nós teremos 3 métodos: (i) um para adicionar ao carrinho; (ii) um para limpar o carrinho; (iii) um para obter as informações do carrinho*/

  /*Vamos fazer um método para obter informações de um carrinho*/
  obtemCarrinho(){
    /*Em regra, quando estamos num e-commerce e adicionamos itens a um carrinho de compra, esse carrinho fica salvo no "cookies" da nossa página de forma que, se saímos do site e entramos de novo, o nosso carrinho permanece salvo lá. 
    Nesse nosso site, contudo, eu quero que todos os produtos que adicionarmos ao carrinho, sejam inseridos no "Local Storage/Armazenamento Local". Para isso, nós criaremos uma const "carrinho" e guardaremos nela a informação pega no componente "carrinho". Para que possamos utilizar essa informaçao recebida, ela nao pode estar no formato string, ela precisa estar num formato "objeto JSON", por isso nós faremos também a conversão desse dado para "objeto de JSON". Feito isso, esse carrinho representará um item do vetor "IProdutoCarrinho"*/
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;    
  }

  /*Vamos fazer um método para inserir itens dentro de um carrinho. Esse método receberá um produto do tipo "IProdutoCarrinho", vai acrescentar esse novo item ao carrinho (ou seja, vai fazer um "push") e depois vai salvar a lista de produtos atualizada no "localStorage/Armazenamento Local" para que, mesmo depois de eu sair da pagina, eu conseguir obter essas informações. Para a gente fazer isso nós precisamos converter a informaçãõ que está em "objeto JSON" para uma "string".*/
  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }


  /*Vamos criar um método para remover itens do carrinho*/
  removerProdutoCarrinho(produtoId: number){
    /*nós podemos filtrar, de dentro da propriedade "itens", os produtos que tenham um "id" diferente do "produtoId" passado como parâmetro do nosso método "removerProdutosCarrinho". 
    Para isso utilizaremos o método "filter" que terá a finalidade de percorrer o vetor "itens" e, por conseguinte, a cada vez que ele percorrer esse vetor ele vai disponibilizar para mim o item específico que eu estou trabalhando e, uma vez feito isso, nós vamos filtrar o item cujo o "id" dele seja diferente do "produtoId".
    Dessa forma, ele vai manter todos os produtos que tenham o "id" diferente do "produtoId" e apenas vai remover o produto que o "id" seja igual ao "produtoId" */
    this.itens = this.itens.filter(item => item.id !== produtoId);
    /*Feito isso, vamos remover o item deletado, também do "Local Storage/Armazenamento Local". Para tanto, vamos sobrescrever o valor do meu carrinho, agora sem aquele item removido.*/
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }


  /*Vamos criar um método para limpar o carrinhho. Nesse método nós vamos: (i) reatribuir um valor para a propriedade "itens" para que ela volte a ser um array vazio; (ii) vamos limpar nosso "localStorage/Armazenamento Local*/
  limparCarrinho(){
    this.itens=[];
    localStorage.clear();
  }
}
