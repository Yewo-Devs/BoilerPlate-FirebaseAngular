import { Component, OnInit } from '@angular/core';
import { NavBreadCrumbComponent } from '../../ui/nav-bread-crumb/nav-bread-crumb.component';
import { PaymentService } from '../../../shared/services/payment-service/payment.service';
import { SubscriptionDto } from '../../../shared/models/dto/payment/subscription-dto';
import { TransactionDto } from '../../../shared/models/dto/payment/transaction-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-billing',
  imports: [
    NavBreadCrumbComponent,
    CurrencyPipe,
    DatePipe,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export class BillingComponent implements OnInit {
  subscription: SubscriptionDto;
  transactions: TransactionDto[];

  prefs;

  constructor(
    private paymentService: PaymentService,
    private preferencesService: PreferencesService,
    private toastService: ToastrService,
    private busyService: BusyService
  ) {
    this.prefs = preferencesService.getPreferences();
  }

  ngOnInit(): void {
    this.getSubscription();
  }

  getSubscription() {
    this.busyService.busy();

    this.paymentService.getSubscription(this.prefs.user.id).subscribe(
      (sub: any) => {
        this.subscription = sub;

        this.getTransactions();
      },
      (error) => {
        this.busyService.idle();
      }
    );
  }

  pageSize: number = 5;
  currentPage: number = 1;

  getTransactions() {
    this.busyService.busy();

    this.paymentService
      .getTransactions(this.prefs.user.id, this.currentPage, this.pageSize)
      .subscribe(
        (transactions: any) => {
          this.transactions = transactions;
          this.busyService.idle();
        },
        (error) => {
          this.busyService.idle();
        }
      );
  }

  validSubscription() {
    if (!this.subscription) {
      return false;
    }

    return (
      this.subscription &&
      this.subscription.cancellationDate.toString() === '0001-01-01T00:00:00'
    );
  }

  cancelSubscription() {
    this.busyService.busy();
    this.paymentService
      .cancelSubscription(this.subscription.subscriptionId)
      .subscribe(
        (response) => {
          this.toastService.success('Subscription cancelled');
          this.busyService.idle();
          window.location.reload();
        },
        (error) => {
          this.toastService.error('Error cancelling subscription');
          this.busyService.idle();
        }
      );
  }

  managePaymentMethod() {
    this.busyService.busy();

    this.paymentService
      .updatePaymentMethod(this.subscription.subscriptionId)
      .subscribe(
        (response) => {
          this.busyService.idle();
          window.open(response, '_self');
        },
        (error) => {
          this.toastService.error('Error updating payment method');
          this.busyService.idle();
        }
      );
  }
}
