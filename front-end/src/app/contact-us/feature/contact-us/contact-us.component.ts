import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { EmailService } from '../../data-access/email.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private emailService: EmailService,
    private busyService: BusyService,
    title: Title,
    meta: Meta
  ) {
    title.setTitle('Contact Us');
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
