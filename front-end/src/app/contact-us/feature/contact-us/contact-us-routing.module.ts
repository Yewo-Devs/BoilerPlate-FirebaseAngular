import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ContactUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {}
