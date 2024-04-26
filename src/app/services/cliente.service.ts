import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesUrl = "http://localhost:3000/clientes";
  constructor(private http: HttpClient) { }

  //Esta lista virá da API
  clientes:Cliente[] = []

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.clientesUrl) as Observable<Cliente[]>;


    //return this.clientes;
  }

  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id);

    if(cliente){
       const index = this.clientes.indexOf(cliente);
       this.clientes.splice(index,1);
    }
  }

  adicionar(cliente:Cliente){
    this.clientes.push(cliente);
  }
}
