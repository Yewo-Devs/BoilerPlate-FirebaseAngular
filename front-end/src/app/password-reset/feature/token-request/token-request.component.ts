import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@Component({
  selector: 'app-token-request',
  imports: [ReactiveFormsModule, SharedUiModule],
  templateUrl: './token-request.component.html',
  styleUrls: ['./token-request.component.css'],
})
export class TokenRequestComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private toastService: ToastrService,
    private busyService: BusyService,
    private routerService: Router
  ) {}

  tokenForm: any;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.tokenForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  tokenRequest() {
    this.busyService.busy();

    this.accountService
      .tokenRequest(this.tokenForm.controls.email.value)
      .subscribe(
        (response) => {
          this.busyService.idle();
          this.toastService.success(
            'Reset intructions have been sent to your email address',
            'Success'
          );
        },
        (error) => {
          this.busyService.idle();
          this.toastService.error(error.error, 'Error');
        }
      );
  }
}
