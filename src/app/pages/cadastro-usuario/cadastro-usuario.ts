import { Usuario } from './../model/usuario';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Component, OnInit } from "@angular/core";

@Component ({
    selector : 'cadastro-usuario',
    styleUrls: ['cadastro-usuario.scss'],
    templateUrl: 'cadastro-usuario.html'
})
export class CadastroUsuario implements OnInit {

     public formGroup:FormGroup;
     public usuario: Usuario = new Usuario();
      constructor(private formBuilder:FormBuilder) { 
      }

      ngOnInit(){
          this.formGroup = this.formBuilder.group({
              nome:[null, Validators.required], 
              cpf: [null, Validators.required], 
              email:[null, Validators.required], 
              login:[null, Validators.required], 
              senha: [null,Validators.required],
              confirmesenha:[null, Validators.required], 
              apelido: [''],
              telefone: [null],
              celular: [null],
              grupousu: [null,Validators.required] 
          });
      }

      public salvar() {
          if(this.formGroup.invalid){
              return;
          }
          alert('Salvo com sucesso!');  
    }

     public cancelar() {
         alert('Foi cancelado');
     }

    
         public onChangeNewSenha(){
         if ( this.usuario.confirmesenha != null && this.usuario.senha != null){
            if (this.usuario.confirmesenha != this.usuario.senha ){
                this.formGroup.controls.confirmesenha.setErrors({ senhaNaoConfere: true} );
            }else {
                this.formGroup.controls.confirmesenha.setErrors(null);
            }
        }
    }

}