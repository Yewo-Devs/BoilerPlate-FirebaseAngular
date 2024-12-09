import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalyticsService } from 'src/app/shared/services/analytics-service/analytics.service';

@Component({
  selector: 'app-verification-result',
  templateUrl: './verification-result.component.html',
  styleUrl: './verification-result.component.css',
})
export class VerificationResultComponent {
  success: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private analyticsService: AnalyticsService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.success = params['result'] != 'fail';

      this.analyticsService.trackEvent(
        'Account Verification Result Page Loaded',
        params['result'],
        'Customer Interaction'
      );
    });
  }
}
