import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NotFoundComponent,
    LayoutComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
