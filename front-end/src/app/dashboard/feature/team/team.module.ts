import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBreadCrumbComponent } from '../../ui/nav-bread-crumb/nav-bread-crumb.component';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { DialogModule } from 'primeng/dialog';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    NavBreadCrumbComponent,
    ReactiveFormsModule,
    CommonModule,
    TeamRoutingModule,
    DialogModule,
    SharedUiModule,
  ],
})
export class TeamModule {}
