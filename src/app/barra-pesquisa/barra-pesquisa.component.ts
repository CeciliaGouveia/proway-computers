import { Component, OnInit } from '@angular/core';
/*Vamos importar o "Router" pois faremos redirecionamento do usuário*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  /*Vamos criar a propriedade "descricao" que, inicalmente receberá uma string vazia*/
  descricao = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /*Vamos criar um método que terá a finalidade de pesquisarmos através da barra de pesquisa existente nas páginas do site. Se o usuário tiver digitado algo, ou seja, se tiver atrbiuído algum valor à propriedade "descricao", eu vou redirecionar o usuário apra a página de produtos, passando como "query params/parâmetros de consulta" aqueles valores setados pelo usuário na barra de pesquisa*/
  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], { queryParams: {descricao: this.descricao}} );
      return
    }

    /*Caso o usuário não tenha passado valores para a propriedade "descricao", ou seja, se ele não tiver digitado nada na barra de pesquisa, nós apenas o redirecionaremos para a página de produtos, mas sem qualquer filttro de pesquisa*/
    this.router.navigate(["produtos"]);
  }

}
