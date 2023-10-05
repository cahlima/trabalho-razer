import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Cliente[] = []; 

  constructor(private clienteService: ClienteService,

  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clientes = this.listarTodos();
  }

  listarTodos(): Cliente[] {
    return this.clienteService.listarTodos();
  }

  remover($event: any, cliente: Cliente): void {
    $event.preventDefault();
    if(confirm ('Deseja remover esse cliente?')) {
      this.clienteService.remover(cliente.id!);
      this.clientes = this.listarTodos();
    }
  }


abrirModalClientes (Cliente: Cliente) {
    const modalRef = this.modalService.open(ModalClienteComponent);
    modalRef.componentInstance.cliente = Cliente;
    }

  }

