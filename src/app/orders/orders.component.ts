import { Component} from '@angular/core';
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
  newOrder = { numero_pedido: '', importe: '', importe_impuestos: '', cantidad_productos: '', fecha: '', producto:''};

}
