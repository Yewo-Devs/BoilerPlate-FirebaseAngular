import { TransactionDto } from '../payment/transaction-dto';

export interface Customer {
  photoUrl: string;
  fullName: string;
  email: string;
  currency: string;
  amount: number;
  location: string;
}

export interface DashboardAmountDto {
  amount: number;
  positiveChange: boolean;
  change: number;
}

export interface DashboardDto {
  currency: string;
  salesToday: DashboardAmountDto;
  totalSales: DashboardAmountDto;
  averageSale: DashboardAmountDto;
  totalCustomers: DashboardAmountDto;
  salesReport12Month: { [key: string]: any };
  salesReport6Month: { [key: string]: any };
  salesReport30Days: { [key: string]: any };
  salesReport7Days: { [key: string]: any };
  trafficSources12Month: { [key: string]: any };
  trafficSources6Month: { [key: string]: any };
  trafficSources30Days: { [key: string]: any };
  trafficSources7Days: { [key: string]: any };
  recentCustomers: Customer[];
  recentTransactions: TransactionDto[];
}
