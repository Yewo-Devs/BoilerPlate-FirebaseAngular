import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getItems(ownerId: string) {
    return this.httpClient.get(
      environment.apiUrl + 'dashboard/get-items?ownerId=' + ownerId
    );
  }
}
