import { Injectable } from '@angular/core';
import { Cliente } from "../interfaces/Clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

  //Esse vetor/lista virá da API
  clientes:Cliente[] = [
    {id:"fnodbhqod", nome:"Gabriel Mendonça"},
    {id:"teste", nome: "Teste 2", telefone:"23424242"}
  ];

  listar():Cliente[]{
    return this.clientes;
  }

  remove(id:string){
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
