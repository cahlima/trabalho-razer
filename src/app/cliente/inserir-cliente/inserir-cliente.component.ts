import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})
export class InserirClienteComponent implements OnInit {

  @ViewChild('formCliente') formCliente! : NgForm;
  cliente! : Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  inserir(): void {
    if(this.formCliente.form.valid) {
      
      this.clienteService.inserir(this.cliente);
      this.router.navigate( ['/cliente']);
    }
  }
 
}
