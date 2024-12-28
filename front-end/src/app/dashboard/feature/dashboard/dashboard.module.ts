import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Menu } from 'primeng/menu';
import { SelectButton } from 'primeng/selectbutton';
import { Dialog } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SelectButton,
    Dialog,
    Menu,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DashboardModule {}
