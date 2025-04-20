import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';

export const routes: Routes = [
    { path: '', component: CurriculumComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'documentacion', component: DocumentacionComponent }
];
