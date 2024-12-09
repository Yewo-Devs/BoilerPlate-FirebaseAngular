import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
@Component({
  imports: [CommonModule, RouterModule, SharedUiModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  saasName: string = environment.saasName;
  faq: any = { hidden: false };
  faq2: any = { hidden: true };
  faq3: any = { hidden: true };
  faq4: any = { hidden: true };
}
