import { Component, OnInit } from '@angular/core';

/*Vamos importar o nosso serviço "CarrinhoService"*/
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    /*Vamos importar o nosso serviço "CarrinhoService" para atualizar o contador do carrinho, conforme o usuário selecionar produtos para serem adicionados ao carrinho*/
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
  }

}
