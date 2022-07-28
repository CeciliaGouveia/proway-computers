/*Nesse serviço nós precisaremos utilizar o "MatSnackBarModule" para fazer com que a mensagem apareça na tela */
import { Injectable } from '@angular/core';
/*Vamos importar o "MatSnackBar para esse arquivo "notificacao.service.ts"*/
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  
  
  constructor( 
    //vamos injetar o "MatSnackBar" no método construtor da nossa classe
    private snackBar: MatSnackBar
    ) { }

    /*Vamos criar um método chamado 'notificar' que vai recbeer uma mensagem que será uma string e aí ele vai chamar o módulo "snack.Bar" seguido do método "open", passando como parâmetro do método: (i) o conteudo da "mensagem", (ii)seguido da açao (que será o texto do botão que aparece do lado da snackBar), (iii) as configurações  onde eu poderei, por exmeplo , dizer quanto tempo irá durar minha snackbar, a posição dela que pode ser tanto na horizontal quanto na vertical, */
    notificar(mensagem: string){
      this.snackBar.open(mensagem, "Ok", {
        /*vai durar 2 milissegundos, ou seja, 2 segundos.*/
        duration: 2000,
        verticalPosition: "top",
        horizontalPosition: "center"
      })
    }
}
