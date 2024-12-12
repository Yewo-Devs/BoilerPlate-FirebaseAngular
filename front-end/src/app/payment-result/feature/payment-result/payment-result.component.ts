import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-result',
  imports: [RouterModule, CommonModule],
  templateUrl: './payment-result.component.html',
  styleUrl: './payment-result.component.css',
})
export class PaymentResultComponent {
  success: boolean = false;
  constructor(private route: ActivatedRoute, title: Title) {
    title.setTitle('Hide.me | Payment Result');
    this.route.queryParams.subscribe((params) => {
      this.success = params['result'] != 'fail';
    });
  }
}
