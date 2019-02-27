import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroFuncionarioPage } from './cadastro-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFuncionarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroFuncionarioPage]
})
export class CadastroFuncionarioPageModule {}
