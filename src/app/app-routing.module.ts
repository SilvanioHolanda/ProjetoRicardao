import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticarLoginGuard } from './autenticar-login.guard';

const routes: Routes = [
  { path: "", redirectTo:'login', pathMatch:'full'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'lista-funcionarios', canActivate:[AutenticarLoginGuard], loadChildren: './lista-funcionarios/lista-funcionarios.module#ListaFuncionariosPageModule' },
  { path: 'cadastro-funcionario', canActivate:[AutenticarLoginGuard], loadChildren: './cadastro-funcionario/cadastro-funcionario.module#CadastroFuncionarioPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}