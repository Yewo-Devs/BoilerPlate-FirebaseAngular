import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { PasswordResetDto } from '../../../shared/models/dto/user-auth/password-reset-dto';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@Component({
  selector: 'app-password-reset',
  imports: [ReactiveFormsModule, SharedUiModule],
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  accountId: string;
  token: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private toastService: ToastrService,
    private busyService: BusyService,
    private routerService: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.accountId = params['accountId'];
      this.token = params['token'];
    });
  }

  passwordForm: any;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  resetPassword() {
    if (
      this.passwordForm.controls.newPassword.value !==
      this.passwordForm.controls.confirmPassword.value
    ) {
      this.toastService.error('Passwords do not match', 'Error');
      return;
    }

    this.busyService.busy();

    let passwordResetDto: PasswordResetDto = {
      accountID: this.accountId,
      token: this.token,
      password: this.passwordForm.controls.newPassword.value,
    };

    this.accountService.passwordReset(passwordResetDto).subscribe(
      (response) => {
        this.busyService.idle();

        this.toastService.success('Password reset successful', 'Success');

        this.routerService.navigateByUrl('/sign-in');
      },
      (error) => {
        this.busyService.idle();
        this.toastService.error(error.error, 'Error');
      }
    );
  }
}
