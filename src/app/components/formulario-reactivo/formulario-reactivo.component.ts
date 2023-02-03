import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formularioMatricula: FormGroup;

  constructor(){
    /* VALIDACIONES */
    let regexCorreo: string='^[a-z]+@[a-z]+\\.[a-z]{2,3}$'
    let controles: any={
      curso: new FormControl('',[Validators.required]),
      alumno: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required,Validators.pattern(regexCorreo)]),
      contraseña: new FormControl('',[Validators.required,Validators.minLength(7)]),
      matriculado: new FormControl(false,[])
    }
    this.formularioMatricula = new FormGroup(controles);
  }

  matricula(){
    /* Mensajes de VALIDACIONES */
    console.log(this.formularioMatricula);
    if(this.formularioMatricula.controls['correo'].errors?.['pattern']){
      console.log("Este no es un correo");
    }
    if(this.formularioMatricula.controls['correo'].errors?.['required']){
      console.log("Se necesita ingresar correo");
    }

    
  }

}
