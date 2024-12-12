import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-verification-result',
  templateUrl: './verification-result.component.html',
  standalone: false,
  styleUrl: './verification-result.component.css',
})
export class VerificationResultComponent {
  success: boolean = false;
  saasName: string = environment.saasName;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.success = params['result'] != 'fail';
    });
  }
}
