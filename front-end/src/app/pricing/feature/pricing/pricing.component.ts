import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import {
  CheckoutDto,
  PaymentTypes,
} from '../../../shared/models/dto/checkout-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { PaymentService } from '../../../shared/services/payment-service/payment.service';

@Component({
  selector: 'app-pricing',
  imports: [SharedUiModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  items: CheckoutDto[] = [
    {
      customerId: '',
      itemTitle: 'Individual',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      price: 10,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: true,
      freeTrialPeriodDays: 30,
    },
    {
      customerId: '',
      itemTitle: 'Team',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      price: 99,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: false,
      freeTrialPeriodDays: 0,
    },
    {
      customerId: '',
      itemTitle: 'Popular',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      price: 150,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: false,
      freeTrialPeriodDays: 0,
    },
    {
      customerId: '',
      itemTitle: 'Enterprise',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      price: 490,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: false,
      freeTrialPeriodDays: 0,
    },
  ];

  constructor(
    private preferencesService: PreferencesService,
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const itemIndex = params['itemIndex'];
      if (itemIndex) {
        this.onBuy(itemIndex);
      }
    });
  }

  onBuy(itemIndex: number) {
    let prefs = this.preferencesService.getPreferences();

    if (!prefs.user) {
      prefs.nextPage = '/pricing?itemIndex=' + itemIndex;

      this.preferencesService.setPreferences(prefs);

      this.router.navigateByUrl('/sign-in');
    }

    let item = this.items[itemIndex];

    item.customerId = prefs.user.id;

    this.paymentService.getPaymentPage(item).subscribe((response) => {
      //navigate to payment page
      window.open(response, '_self');
    });
  }
}
