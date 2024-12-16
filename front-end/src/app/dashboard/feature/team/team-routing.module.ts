import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
