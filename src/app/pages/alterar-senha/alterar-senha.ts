import { Alterar } from './../model/alterar';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component ({
    selector : 'alterar-senha',
    styleUrls: ['alterar-senha.scss'],
    templateUrl: 'alterar-senha.html'
})
export class AlterarSenha implements OnInit {

    public formGroup:FormGroup;
    public alterar: Alterar = new Alterar();
    public confirmeSenha:string;

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
 
        const novaSenha = new FormControl('', Validators.required);
        const confirmeSenha = new FormControl('', Validators.required);       

        this.formGroup = this.fb.group({
            usuario: ['', Validators.required],
            senhaAtual: ['', Validators.required],
            novaSenha: novaSenha,
            confirmeSenha: confirmeSenha
        });
        /**
         * Vai ser carregado o storage do navegador os dados do usuário
         */
        let user = localStorage.getItem('alterar');
        if (user != null){
            /**
             *  Caso já tenha um usuário no storage vai ser convertido 
             * de obj para Usuario
             */
            this.alterar = JSON.parse(user);
        }
    }

        public onChangeNewSenha(){
        if ( this.confirmeSenha != null && this.alterar.novaSenha != null){
            if (this.confirmeSenha != this.alterar.novaSenha ){
                this.formGroup.controls.confirmeSenha.setErrors({ senhaNaoConfere: true} );
            }else {
                this.formGroup.controls.confirmeSenha.setErrors(null);
            }
        }
    }

    public salvar(){
        console.log(this.alterar);
        let user = JSON.stringify(this.alterar);
        localStorage.setItem('alterar', user);
        alert('Salvou o Usuário nos logs');
    }

    public cancelar(){
        console.log('Foi cancelado a alteração de senha');
    }  
      

}

     