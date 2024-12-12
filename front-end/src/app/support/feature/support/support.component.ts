import { Component } from '@angular/core';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { EmailService } from '../../data-access/email.service';

@Component({
  selector: 'app-support',
  imports: [SharedUiModule, ReactiveFormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private emailService: EmailService,
    private busyService: BusyService,
    title: Title,
    meta: Meta
  ) {
    title.setTitle('Support');
    meta.addTags([
      {
        name: 'description',
        content: 'We would love to hear from you.',
      },
      {
        name: 'keywords',
        content: 'Illustration, Contact, Illustration Packs',
      },
    ]);
  }

  contactForm: any;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  contact() {
    let contactForm = {
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      message: this.contactForm.controls.message.value,
    };

    this.busyService.busy();

    this.emailService.SendCustomerContactForm(contactForm).subscribe(
      (response) => {
        this.busyService.idle();

        this.toastrService.success(
          'We have received your message, we will reply shortly.',
          'Message Received'
        );
      },
      (error) => {
        this.busyService.idle();

        this.toastrService.error(
          'Something went wrong please try again.',
          'Message Failed'
        );
      }
    );
  }
}
