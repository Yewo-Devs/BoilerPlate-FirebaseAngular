import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private httpClient: HttpClient) {}

  //get-dashboard
  getDashboard() {
    return this.httpClient.get(environment.apiUrl + 'report/dashboard');
  }

  getSalesReport(period: any) {
    return this.httpClient.post(
      environment.apiUrl + 'report/get-sales-report',
      period
    );
  }
}
