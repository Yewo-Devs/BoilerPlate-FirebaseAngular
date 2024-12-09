import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { EditorModule } from 'primeng/editor';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SharedUiModule } from 'src/app/shared/ui/shared-ui.module';
import { NavModule } from 'src/app/shared/nav/nav.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    EditorModule,
    ReactiveFormsModule,
    NavModule,
    SharedUiModule,
    InputTextModule,
  ],
})
export class ContactUsModule {}
