import { AlterarSenha } from './pages/alterar-senha/alterar-senha';
import { CadastroCliente } from './pages/cadastro-cliente/cadastro-cliente';
import { CadastroUsuario } from './pages/cadastro-usuario/cadastro-usuario';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const appRoutes: Routes = [

    {
        path: 'cadastro-cliente',
        component: CadastroUsuario
    }, {
        path: 'cadastro-usuario',
        component: CadastroCliente
    }, {
        path: 'alterar-senha',
        component: AlterarSenha
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })

    ],
    exports: [RouterModule]
})

export class AppRoute {

    constructor(router: Router) {

    }
}