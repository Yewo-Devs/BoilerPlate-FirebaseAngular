import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReportService } from '../../../shared/services/report-service/report.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@Component({
  selector: 'app-sales-report',
  imports: [ReactiveFormsModule, CommonModule, SharedUiModule],
  templateUrl: './sales-report.component.html',
  styleUrl: './sales-report.component.css',
})
export class SalesReportComponent implements OnInit {
  sales: any[] = [];

  periodForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private busyService: BusyService
  ) {}

  ngOnInit(): void {
    this.periodForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  periodTotal() {
    let total = 0;

    for (let i = 0; i < this.sales.length; i++) {
      if (this.sales[i].Price) {
        total += this.sales[i].Price;
      }
    }

    return total;
  }

  onSubmit(): void {
    this.busyService.busy();

    this.reportService
      .getSalesReport(this.periodForm.value)
      .subscribe((data: any[]) => {
        this.sales = data;
        this.busyService.idle();
      });
  }
}
