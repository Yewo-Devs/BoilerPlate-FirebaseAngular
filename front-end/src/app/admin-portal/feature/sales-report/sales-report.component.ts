import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReportService } from '../../../shared/services/report-service/report.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-sales-report',
  imports: [TableModule, DatePickerModule, ReactiveFormsModule],
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

  exportExcel() {
    import('xlsx').then((xlsx) => {
      // Define the columns you want to include in the Excel file
      const columnsToExport = ['Id', 'Date', 'Customer', 'Item', 'Price']; // Replace with actual column names

      // Map over the users array and create a new array with only the desired columns
      const filteredSales = this.sales.map((sale) => {
        return columnsToExport.reduce((obj, key) => {
          if (sale.hasOwnProperty(key)) {
            obj[key] = sale[key];
          }
          return obj;
        }, {});
      });

      // Convert the filtered data to a worksheet
      const worksheet = xlsx.utils.json_to_sheet(filteredSales);

      // Create a workbook and add the worksheet to it
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };

      // Write the workbook to an Excel file
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      // Save the Excel file
      this.saveAsExcelFile(excelBuffer, 'sales-report');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + ' ' + new Date().toLocaleDateString() + EXCEL_EXTENSION
    );
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
