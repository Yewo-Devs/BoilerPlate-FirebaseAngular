import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';

@Component({
  selector: 'app-verification-request',
  templateUrl: './verification-request.component.html',
  standalone: false,
  styleUrl: './verification-request.component.css',
})
export class VerificationRequestComponent {
  retries = 0;
  accountId = '';

  constructor(
    private preferencesService: PreferencesService,
    private route: ActivatedRoute,
    private busyService: BusyService,
    private accountService: AccountService,
    private toastService: ToastrService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.accountId = params['accountId'];
    });
  }

  ngOnInit(): void {
    this.retries =
      this.preferencesService.getPreferences().retries == null
        ? 0
        : this.preferencesService.getPreferences().retries;
  }

  resendEmail() {
    this.busyService.busy();

    if (this.retries > 5) {
      this.toastService.error(
        'You have reached the maximum number of retries',
        'Error'
      );

      this.busyService.idle();

      return;
    }

    this.retries++;

    let prefs = this.preferencesService.getPreferences();

    prefs.retries = this.retries;

    this.preferencesService.setPreferences(prefs);

    this.accountService.resendVerificationEmail(this.accountId).subscribe(
      () => {
        this.busyService.idle();

        this.toastService.success(
          'We have sent you an email check your inbox for instructions.'
        );
      },
      () => {
        this.busyService.idle();

        this.toastService.error('Something went wrong', 'Error');
      }
    );
  }
}
