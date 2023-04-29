import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  declarations: [DashboardComponent, TableComponent, HeaderComponent],
  imports: [CommonModule, MainRoutingModule, NzButtonModule, NzTableModule,NzIconModule,NzPageHeaderModule],
})
export class MainModule {}

