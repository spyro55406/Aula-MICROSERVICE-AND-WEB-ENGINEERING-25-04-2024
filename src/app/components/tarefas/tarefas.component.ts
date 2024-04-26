import { Component } from '@angular/core';
import { TarefasService } from '../../services/tarefas.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  tarefas:Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup({})

  constructor(private tarefaService:TarefasService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      data: ['', Validators.required]
    })
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir(){
    if(this.tarefaForm.valid){
      const tarefaNova:Tarefa = {
        nome: this.tarefaForm.value.nome,
        descricao: this.tarefaForm.value.descricao,
        data: this.tarefaForm.value.data,
        id: this.generateRandomString(6)
      }
      this.tarefaForm.reset()
      this.tarefaService.adicionar(tarefaNova)
      alert('Cadastrado com sucesso!')
    }
  }

  listar():void{
    this.tarefas = this.tarefaService.listar();
}

remover(id:string):void{
  this.tarefaService.remover(id);
  alert('Removido com sucesso!')
}

ngOnInit():void{
  this.listar();
}




}
