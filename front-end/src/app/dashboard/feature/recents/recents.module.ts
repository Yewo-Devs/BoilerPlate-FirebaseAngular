import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentsComponent } from './recents.component';
import { RecentsRoutingModule } from './recents-routing.module';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [RecentsComponent],
  imports: [CommonModule, RecentsRoutingModule, MenuModule],
})
export class RecentsModule {}
