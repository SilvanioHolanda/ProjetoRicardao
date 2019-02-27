import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.page.html',
  styleUrls: ['./cadastro-funcionario.page.scss'],
})
export class CadastroFuncionarioPage implements OnInit {

  constructor(private rotas:Router) { }

  ngOnInit() {
  }

  cadastrar(){
    this.rotas.navigateByUrl("lista-funcionarios");
  }

}
