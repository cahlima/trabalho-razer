import { Component, OnInit, Input } from '@angular/core';
import { Pedidos } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css']
})
export class ModalPedidoComponent {


  @Input() pedido!: Pedidos;

  constructor(public activeModal: NgbActiveModal){}

  ngOnInit(): void {
    
  }

}
