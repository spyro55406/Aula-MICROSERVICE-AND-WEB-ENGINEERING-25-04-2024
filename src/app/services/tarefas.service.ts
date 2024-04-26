import { Injectable } from '@angular/core';
import {Tarefa} from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

  //Lista Exemplo
  tarefas:Tarefa[] = [
    {nome: "Tarefa1", descricao: "Atividade Guilherme Miguel", data: "2024-04-18", id: "11111"},
    {nome: "Tarefa2", descricao: "Atividade Guilherme Lima", data: "2024-04-18", id: "222222"},
  ];


  listar():Tarefa[]{
    return this.tarefas;
  }

  remover(id:string){
    const tarefa = this.tarefas.find(c => c.id == id);

    if(tarefa){
       const index = this.tarefas.indexOf(tarefa);
       this.tarefas.splice(index,1);
    }
  }

  adicionar(tarefa:Tarefa){
    this.tarefas.push(tarefa);
  }



}
