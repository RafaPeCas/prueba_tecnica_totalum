import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntityTableComponent } from '@app/shared/entity-table/entity-table.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, EntityTableComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
    clients: any[] = [];
    editingId: string | null = null;
    editedClient: any = {};
    newClient = { nombre: '', fecha_nacimiento: '', email: '', telefono: ''};
}
