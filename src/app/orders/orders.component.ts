import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntityTableComponent } from '../shared/entity-table/entity-table.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, EntityTableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: any[] = [];
  filteredOrders: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchTerm: string = ''; // Término de búsqueda
  searchColumn: string = 'numero_pedido'; // Columna por la que se va a buscar
  newOrder = { numero_pedido: '', importe: '', importe_impuestos: '', cantidad_productos: '', fecha: '', producto:''};

  formatOrder(order: any): any {
    return {
      ...order,
      importe: order.importe / 100 + " €",
      importe_impuestos: order.importe_impuestos / 100 + " €"
    };
  }

}
