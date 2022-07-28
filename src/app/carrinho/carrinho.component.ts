import { Component, OnInit } from '@angular/core';
/*Vamos fazer a importação do Router*/
import { Router } from '@angular/router';
/*Vamos fazer a importação do nosso serviço de carrinho*/
import { CarrinhoService } from '../carrinho.service';
/*Vamos fazer a importação da nossa interface "IProdutoCarrinho" que criamos no arquivo "produtos.ts"*/
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  /*Vamos criar uma propriedade que guardará todos os itens existentes dentro do meu carrinho*/
  itensCarrinho: IProdutoCarrinho[] = [];

  /*Vamos criar uma propriedade que guardará a soma dos valores de todos os itens do carrinho*/
  total = 0;

  /*Vamos adicionar, dentro do método construtor, o nosso "CarrinhoService"*/
  constructor(
    public carrinhoService: CarrinhoService,
    /*Vamos fazer a injeção do router dentro do nosso componente de carrinho*/
    private router: Router
    ) { }

  /*Quando o componente "carrinho" for inicializado, eu quero popular a propriedade "itensCarrinho". Para isso utilizaremos nosso serviço de carrinho, especialmente o método dele chamado "obtemCarrinho()"*/
  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    /*Vamos chamar a execução do método "calcularTotal*/
    this.calcularTotal();
  }

  /*Vamos criar um método que vai calcular a soma dos produtos que estão dentro do carrinho. Esse método vai peorcorrer todos os itens do carrinho, vai verificar o preço daquele item e a quantidade de elementos que estão associados aquele item. Feito isso, ele vai somar tudo isso.
  Como o "itensCarrinho" é um vetor, nós trabalharemos com o método "reduce" e esse método sempre me retorna o elemento anterior e o elemento atual então e, com isso eu consigo, por exemplo, somar o que eu tinha calculado anteriormente com o que eu estou calculando agora e repetir essa operação até os itens do carrinho acabarem. Vamos passar também um "0" como valor default*/
  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  /*para que o produto que removemos do carrinho, nao apareça mais na nossa página de "carrinhos", nós teremos que fazer um método dentro de "carrinho.component.ts". nesse método, eu basicamente farei um filtro no meu vetor "itensCarrinho" para que sejam filtrados todos os produtos cujo o "id" seja diferente do "produtoId".Dessa forma, ele vai manter todos os produtos que tenham o "id" diferente do "produtoId" e apenas vai remover o produto que o "id" seja igual ao "produtoId". */
  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    /*Feito isso, vamos remover o item deletado, também do "Local Storage/Armazenamento Local". Para tanto, vamos sobrescrever o valor do meu carrinho, agora sem aquele item removido.*/
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    /*Feito isso, eu vou chamar a execução do método "calculaTotal()" para que o total da soma dos valores dos produtos do carrinho, que fica sendo exibido na página, seja atualizado também*/
    this.calcularTotal();
  }

  /*Vamos implementar o método de comprar. Esse método, basicamente, mostrará um "alert" com uma mensagem para o usuário. Depois ele vai limpar os itens do carrinho. Por fim, vamos reencaminhar o usuário para a página de produtos para que ele compre mais produtos*/
  comprar(){
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos'])
  }

}
