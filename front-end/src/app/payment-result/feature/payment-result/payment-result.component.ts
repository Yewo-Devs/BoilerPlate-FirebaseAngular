import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account-service/account.service';
import { AnalyticsService } from 'src/app/shared/services/analytics-service/analytics.service';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { PreferencesService } from 'src/app/shared/services/preferences-service/preferences.service';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrl: './payment-result.component.css',
})
export class PaymentResultComponent {
  success: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private analyticsService: AnalyticsService,
    private preferencesService: PreferencesService,
    private accountService: AccountService,
    title: Title
  ) {
    title.setTitle('Hide.me | Payment Result');
    this.route.queryParams.subscribe((params) => {
      this.success = params['result'] != 'fail';

      let subscriptionInit = params['subscriptionInit'];

      if (subscriptionInit) {
        let prefs = this.preferencesService.getPreferences();

        let user = prefs.user;

        user.package = 'subscription';

        prefs.user = user;

        this.preferencesService.setPreferences(prefs);

        this.accountService.setUser(user);
      }

      //Track event
      this.analyticsService.trackEvent(
        'Payment Result Page Visited',
        this.success ? 'Successful Payment' : 'Failed Payment',
        'Navigation'
      );

      if (!this.success) {
        return;
      }

      //clear cart
      this.cartService.setCart([]);
    });
  }
}
