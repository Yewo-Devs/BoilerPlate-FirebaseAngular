import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { RouterModule } from '@angular/router';
import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminPortalComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminPortalRoutingModule,
    SelectButton,
    FormsModule,
  ],
})
export class AdminPortalModule {}
