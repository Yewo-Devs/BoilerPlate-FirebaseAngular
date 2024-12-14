import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBreadCrumbComponent } from '../../ui/nav-bread-crumb/nav-bread-crumb.component';

@Component({
  selector: 'app-billing',
  imports: [NavBreadCrumbComponent],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export class BillingComponent {}
