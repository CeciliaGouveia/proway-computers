import { Component, OnInit } from '@angular/core';
/*Vamos importar o "FormBuilder" e o "Validator"*/
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {
  /*vou criar uma propriedade que guardará o meu formulário de contato e, para populá-lo vamos utilzar o "fb" que criamos no método construtor para criar um grupo que, jsutamente, será o meu formulário. No parâmetro dele eu vou passar um objeot e as chaves desse objeto vão ser os campos do meu formulário*/
  formContato = this.fb.group({
    /*Por exemplo, vamos criar a primeira propriedade desse objetoe ela será um vetor que receberá como primeiro valor qual o valor inical que esse nome vai ter e depois, como segundo valor, ele vai receber um segundo vetor onde eu posso colocar algumas validações para esse campo através dos métodos "Validators.minLeght()", "Validators.required()"" etc. */
    nome: ["", [
      /*O campo precisa ter, no mínimo, 4 caracteres*/
      Validators.minLength(4),
      /*O campo é obrigatório, não é opcional*/
      Validators.required
    ]],
    assunto:["", [
      /*O campo precisa ter, no mínimo, 10 caracteres*/
      Validators.minLength(10),
      /*O campo é obrigatório, não é opcional*/
      Validators.required
    ]],
    telefone: ["", [
      /*O campo precisa ter, no mínimo, 11 caracteres*/
      Validators.minLength(11),
      /*O campo é obrigatório, não é opcional*/
      Validators.required
    ]],
    email: ["", [
      /*O campo precisa estar no formato de email*/
      Validators.email,
      /*O campo é obrigatório, não é opcional*/
      Validators.required
    ]],
    mensagem: ["", [
      /*O campo precisa ter, no mínimo, 20 caracteres*/
      Validators.minLength(20),
      /*O campo é obrigatório, não é opcional*/
      Validators.required
    ]]
  })

  constructor(
    /*Vamos fazer a importação do "FormBuilder". Como o "FormBuilder" funciona? Basicamente eu vou agrupar todos os campos que estão presentes no meu formulário e ele me permite fazer algumas validações. Então eu posso dizer que o nome tem que ter um mínimo de caracteres de 4 e ele também precisa ser preenchido para o meu "form" ser válido*/
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  /*Vamos criar um método para que, quando o formulário for enviado, a página automaticamente limpe todos os campos do formulário*/
  enviarFormulario(){
    alert("A mensagem foi enviada!");
    this.formContato.reset();
  }

}
