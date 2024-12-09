import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenRequestRoutingModule } from './token-request-routing.module';
import { TokenRequestComponent } from './token-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@NgModule({
  declarations: [TokenRequestComponent],
  imports: [
    CommonModule,
    TokenRequestRoutingModule,
    SharedUiModule,
    ReactiveFormsModule,
  ],
})
export class TokenRequestModule {}
