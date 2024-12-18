import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { PaymentTypes } from '../../../shared/models/dto/payment/checkout-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { PaymentService } from '../../../shared/services/payment-service/payment.service';
import { environment } from '../../../../environments/environment';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format';
import { SubscriptionDto } from '../../../shared/models/dto/payment/subscription-dto';
import { CommonModule } from '@angular/common';
import { BusyService } from '../../../shared/services/busy-service/busy.service';

@Component({
  selector: 'app-pricing',
  imports: [SharedUiModule, CurrencyFormatPipe, CommonModule],
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
      freeTrial: false,
      freeTrialPeriodDays: 0,
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

  discount = 0.15;

  activeSubscription: SubscriptionDto;

  constructor(
    private preferencesService: PreferencesService,
    private paymentService: PaymentService,
    private busyService: BusyService,
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

    if (this.preferencesService.getPreferences().user) {
      this.busyService.busy();

      this.paymentService
        .getSubscription(this.preferencesService.getPreferences().user.id)
        .subscribe((response: any) => {
          this.activeSubscription = response;
          this.busyService.idle();
        });
    }
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
        this.subscriptionInterval === 'yr'
          ? item.price * (1 - this.discount)
          : item.price;
    });
  }

  getCTA(index: number) {
    if (
      this.items[index].paymentType !== PaymentTypes.Subscription ||
      this.items[index].paymentType !== PaymentTypes.SubscriptionPerUser
    ) {
      return 'Purchase Now';
    }

    //has active subscription
    if (
      !this.activeSubscription &&
      this.activeSubscription.cancellationDate.toString() ===
        '0001-01-01T00:00:00'
    ) {
      return 'Switch to this plan';
    }

    //if active subscription is cancelled
    if (
      !this.activeSubscription &&
      this.activeSubscription.cancellationDate.toString() !==
        '0001-01-01T00:00:00'
    ) {
      return 'Purchase Now';
    }

    //never had a subscription
    return 'Get 30 days free trial';
  }

  displayItem(index: number) {
    if (!this.activeSubscription) {
      return true;
    }

    if (
      this.activeSubscription.cancellationDate.toString() !==
      '0001-01-01T00:00:00'
    ) {
      return true;
    }

    return this.activeSubscription.price != this.items[index].price;
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

    if (this.activeSubscription) {
      item.freeTrial = false;
      item.freeTrialPeriodDays = 0;
    }

    item.price = Math.round(item.price);

    this.busyService.busy();
    this.paymentService.getPaymentPage(item).subscribe((response) => {
      this.busyService.idle();
      //navigate to payment page
      window.open(response, '_self');
    });
  }
}
