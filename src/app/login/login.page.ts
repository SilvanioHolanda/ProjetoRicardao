import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarLoginGuard } from '../autenticar-login.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mensagem:String;
  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder, private rotas:Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.formulario.valid && this.formulario.get('email').value == "silvanio@gmail.com" && this.formulario.get('senha').value == "123456"){
      this.rotas.navigateByUrl("/lista-funcionarios");
      AutenticarLoginGuard.acessar = true;
    } else {
      this.mensagem = "Email ou senha incorreta";
      console.log("Aqui");
    } 
      
  }


}
