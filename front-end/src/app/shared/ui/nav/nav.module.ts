import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { Menu } from 'primeng/menu';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, Menu],
  exports: [NavComponent],
})
export class NavModule {}
