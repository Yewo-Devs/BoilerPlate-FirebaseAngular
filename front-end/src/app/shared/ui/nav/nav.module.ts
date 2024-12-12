import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, OverlayPanelModule],
  exports: [NavComponent],
})
export class NavModule {}
