import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TotalumApiService } from '@app/totalum-api.service';
import { CentToEuroPipe } from '@app/shared/pipes/cent-to-euro.pipe';

@Component({
  selector: 'app-entity-table',
  imports: [CommonModule, FormsModule, CentToEuroPipe],
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.css']
})
export class EntityTableComponent {
  @Input() tableName!: string;
  @Input() title: string = "";
  @Input() items: any[] = [];
  @Input() columns: string[] = [];
  @Input() editable: boolean = false;
  @Input() searchField: string = ""

  loadError: boolean = false;

  editingId: string | null = null;
  editedItem: any = {};
  showModal = false;
  newItem: any = {};

  currentPage: number = 1;
  itemsPerPage: number = 5; 
  
  searchQuery: string = '';

  constructor(private totalumApiService: TotalumApiService) {}

  async ngOnInit() {
    await this.loadItems();
  }

  async loadItems() {
    try {
      this.items = await this.totalumApiService.getItems(this.tableName);
      this.loadError = false;
    } catch (error) {
      console.error("Error cargando datos desde la API:", error);
      this.loadError = true;
    }
  }

  async addItem(newItem: any) {
    await this.totalumApiService.createItem(this.tableName, newItem);
    await this.loadItems();
    this.newItem = {};
    this.showModal = false; 
  }
  
  async updateItem(item: any) {
    console.log("Update item", item)
    await this.totalumApiService.updateItem(this.tableName, item._id, item);
    const index = this.items.findIndex(i => i._id === item._id);
    if (index !== -1) this.items[index] = { ...item };
    this.loadItems()
  }

  async deleteItem(id: string) {
    await this.totalumApiService.deleteItem(this.tableName, id);
    this.items = this.items.filter(i => i._id !== id);
  }


  startEdit(item: any) {
    this.editingId = item._id;
    this.editedItem = { ...item };
  
    this.columns.forEach(col => {
      if (col.toLowerCase().includes('fecha')) {
        this.editedItem[col] = this.formatDateToInput(this.editedItem[col]);
      }
    });
  }

  saveEdit() {
    this.updateItem(this.editedItem);
    this.editingId = null;
  }
  
  cancelEdit() {
    this.editingId = null;
  }

  getInputType(column: string): string {
    if (column.toLowerCase().includes('fecha')) return 'date';
    return 'text';
  }

  filteredItems(): any[] {
    const filtered = this.items.filter((i) =>
      (i[this.searchField] ?? '').toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(
      this.items.filter((i) =>
        i[this.searchField].toLowerCase().includes(this.searchQuery.toLowerCase())
      ).length / this.itemsPerPage
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  formatDateToInput(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
