import { Component, OnInit } from '@angular/core';
//Vamos fazer a importação do "ActivatedRoute" que é o nosso serviço de rota
import { ActivatedRoute } from '@angular/router';
/*Vamos importar o nosso serviço "CarrinhoService"*/
import { CarrinhoService } from 'src/app/carrinho.service';
//Vamos importar o nosso serviço "NotificacaoService"
import { NotificacaoService } from 'src/app/notificacao.service';
//Vamos fazer a importação do "IProduto" e do "IProdutoCarrinho" que criamos no arquivo "produtos.ts"
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
/*Vamos importar o nosso serviço "ProdutosService"*/
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  //Vamos criar uma propriedade chamada "produto" e, ao invés de nós importarmos o arquivo "produtos.ts" diretamente, nós vamos utilizar o nosso serviço "ProdutoService" para obter as informações desse arquivo
  produto: IProduto | undefined; 

  /*Vamos criar a propriedade "quantidade" que servirá para armazenar a quantidade de produto definida pelo usuário da página. Vamos inicializá-la com o número "1"*/
  quantidade = 1;
  
  constructor(
    /*Vamos injetar o nosso serviço "produtosService" na nossa página de "detalhes-produtos"*/
    private produtosService: ProdutosService,
    /*Vamos definir que, com base no "id" passado na URL da página, nós vamos utilizar o nosso serviço de rota denominado "ActivatedRoute*/
    private route: ActivatedRoute,
    /*Vamos dizer que iremos utilizar o serviço de "notificacao.service"*/
    private notificacaoService: NotificacaoService,
    /*Vamos dizer que iremos utilizar o serviço de "carrinho.service"*/
    private carrinhoService: CarrinhoService    
  ) { }

  ngOnInit(): void {
    /*quando nós inicializarmos o componente "detalhes-produtos" eu vou dizer que vou pegar todos os parâmetros da minha rota (this.route.snapshot.paramMap) */
    const routeParams = this.route.snapshot.paramMap;

    /*Após pegarmos o parâmetro da rota e guardarmos na const "routeParams", agora vamos criar uma const "produtoId" que pegará o "id" desses parâmetros e, depois disso, vai convertê-lo para o tipo Number*/
    const produtoId = Number(routeParams.get("id"));

    /*Vamos dizer que a nossa propriedade "produto" vai receber um produto que será pego, através do serviço "produtosService, a partir do "id" desse produto (que será justamente aquele "id" que obtemos através da rota e guardamos na propriedade "produtoId").*/
    this.produto = this.produtosService.getOne(produtoId);
  }

  /*Vamos criar um método chamado "adicionarAoCarrinho"*/
  adicionarAoCarrinho(){
    /*Vamos no nosso serviço "NotificacaoService" e vamos utilizar o método "notificar" para passar uma string para ele*/
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");

    /*Vamos criar uma const chamada "produto" que receberá uma informação dos itens de um carrinho*/
    const produto: IProdutoCarrinho = {
      /*Essa const receberá todos os produtos, junto com o produto definido pelo usuário, assim como receberá a quantidade definida pelo usuário*/
      ...this.produto!,
      quantidade: this.quantidade
    }
    
    /*Depois nós vamos chamar o servico "CarrinhoService" junto com o método "AdicionarAoCarrinho()" */
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
