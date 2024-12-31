import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Menu } from 'primeng/menu';
import { SelectButton } from 'primeng/selectbutton';
import { Dialog } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { SelectModule } from 'primeng/select';

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
    SharedUiModule,
    SelectModule,
  ],
})
export class DashboardModule {}
