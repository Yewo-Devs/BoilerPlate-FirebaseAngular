import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { PaymentTypes } from '../../../shared/models/dto/checkout-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { PaymentService } from '../../../shared/services/payment-service/payment.service';
import { environment } from '../../../../environments/environment';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format';

@Component({
  selector: 'app-pricing',
  imports: [SharedUiModule, CurrencyFormatPipe],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  items: any[] = [
    {
      customerId: '',
      itemTitle: 'Startup',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      originalPrice: 59,
      price: 59,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: true,
      freeTrialPeriodDays: 30,
    },
    {
      customerId: '',
      itemTitle: 'Pro',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      originalPrice: 99,
      price: 99,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: true,
      freeTrialPeriodDays: 30,
    },
    {
      customerId: '',
      itemTitle: 'Company',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      originalPrice: 199,
      price: 199,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: true,
      freeTrialPeriodDays: 30,
    },
    {
      customerId: '',
      itemTitle: 'Enterprise',
      itemDescription:
        'Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet int. Velit officia consequat duis enim velit mollit.',
      currency: 'USD',
      originalPrice: 499,
      price: 499,
      pricePerUser: 0,
      numberOfUsers: 0,
      paymentType: PaymentTypes.Subscription,
      subscriptionInterval: 'month',
      freeTrial: true,
      freeTrialPeriodDays: 30,
    },
  ];

  saasName = environment.saasName;
  subscriptionInterval = 'mo';

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

  toggleSwitch() {
    this.subscriptionInterval =
      this.subscriptionInterval === 'mo' ? 'yr' : 'mo';

    this.items.forEach((item) => {
      item.subscriptionInterval =
        this.subscriptionInterval === 'mo' ? 'month' : 'year';
      item.price =
        this.subscriptionInterval === 'mo'
          ? item.originalPrice
          : item.price * 12;
      //Apply 10% discount for yearly subscription
      item.price =
        this.subscriptionInterval === 'yr' ? item.price * 0.9 : item.price;
      //Round to integer
      item.price = Math.round(item.price);
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
