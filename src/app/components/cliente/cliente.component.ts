import { CommonModule } from '@angular/common';
import { Cliente } from '../../interfaces/Clientes';
import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

        clientes:Cliente[] = [];
    constructor(private clienteService:ClienteService){


    }

    listar():void{
      this.clientes = this.clienteService.listar();
    }

    ngOnInit():void{
      this.listar();
    }

}
