import { Component, OnInit } from '@angular/core';
/*Vamos importar o "ActivetedRoute*/
import { ActivatedRoute } from '@angular/router';

//Vamos fazer a importação do "IProduto"
import { IProduto } from '../produtos';

//Vamos importar o nosso serviço "ProdutosService"
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //Vamos criar uma propriedade chamada "produtos" e, ao invés de nós importarmos o arquivo "produtos.ts" diretamente, nós vamos utilizar o nosso serviço "ProdutoService" para obter as informações desse arquivo
  produtos: IProduto[] | undefined; 

  //Vamos fazer a importação da nossa lista de produtos que está no arquivo "produtos.ts, através do serviço "ProdutosService"
  constructor(
    private produtosService: ProdutosService,
    /*Eu vou trablhar ouvindo os nossos "query params" (parâmetros de consulta) que vem na rota*/
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*Vamos criar uma const "produtos" que guardará todos os produtos retornados através do método "getAll", método esse criado dentro do serviço "produtosService"*/
    const produtos = this.produtosService.getAll();

    /*Quando ele ouvir uma mudança nos meus "query params/parâmetros de consulta", ele vai trazer para mim os parâmetros e daí, com esses parâmetros eu consigo pegar, por exemplo, a "descricao"guardando-a em letras minúsculas*/
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      /*Se eu tiver algum valor na const "descricao" eu posso filtrar os meus produtos e fazer com que só aparecça na tela os produtos que têm aquela descrição informada na barra de pesquisa pelo usuário*/
      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return
      }
      
      /*Caso o usuário não tenha passado nenhhuma descrição na barra de pesquisa, eu vou dizer que aparecerá na tela todos os produtos, sem qualquer filtro */
      this.produtos = produtos;
    })
  }

}
