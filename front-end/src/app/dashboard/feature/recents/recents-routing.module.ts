import { NgModule } from '@angular/core';
import { RecentsComponent } from './recents.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RecentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentsRoutingModule {}
