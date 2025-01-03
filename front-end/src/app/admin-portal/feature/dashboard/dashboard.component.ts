import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { DashboardDto } from '../../../shared/models/dto/report/dashboard-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { ReportService } from '../../../shared/services/report-service/report.service';
import { DarkModeService } from '../../../shared/services/dark-mode-service/dark-mode.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ChartModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  prefs;
  dashboard: DashboardDto;

  data: any;

  options: any;

  selectedPeriod: string = 'year';
  selectedPeriodSources: string = 'week';

  selectedPeriodSource;

  constructor(
    private preferencesService: PreferencesService,
    private darkModeService: DarkModeService,
    private reportService: ReportService,
    private busyService: BusyService
  ) {
    this.prefs = preferencesService.getPreferences();
  }

  ngOnInit(): void {
    this.busyService.busy();
    this.reportService.getDashboard().subscribe((data: DashboardDto) => {
      this.dashboard = data;

      this.updateChart('year');
      this.updateSources('week');

      this.busyService.idle();
    });
  }

  totalSessions(sessions) {
    let totalSessions = 0;

    for (let i = 0; i < sessions.length; i++) {
      totalSessions += sessions[i];
    }

    return totalSessions;
  }

  periodTotal() {
    let total = 0;

    console.log(this.selectedPeriodData);

    for (let i = 0; i < this.selectedPeriodData.newUsersAmounts.length; i++) {
      total += this.selectedPeriodData.newUsersAmounts[i];
    }

    for (
      let i = 0;
      i < this.selectedPeriodData.returningUsersAmounts.length;
      i++
    ) {
      total += this.selectedPeriodData.returningUsersAmounts[i];
    }

    return total;
  }

  selectedPeriodData: any;

  updateChart(period: string) {
    this.selectedPeriod = period;

    const documentStyle = getComputedStyle(document.documentElement);
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.documentElement.style.fontFamily = 'Lexend, sans-serif';
    const textColor = this.darkModeService.isDarkMode()
      ? '#FFF'
      : documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = this.darkModeService.isDarkMode()
      ? '#FFF'
      : documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    let response;

    if (period === 'year') {
      response = this.dashboard.salesReport12Month;
    } else if (period === '6 month') {
      response = this.dashboard.salesReport6Month;
    } else if (period === 'month') {
      response = this.dashboard.salesReport30Days;
    } else if (period === 'week') {
      response = this.dashboard.salesReport7Days;
    }

    this.selectedPeriodData = response;

    this.data = {
      labels: response.labels,
      datasets: [
        {
          label: 'New Users ' + '(' + this.dashboard.currency + ')',
          data: response.newUsersAmounts,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Returning Users ' + '(' + this.dashboard.currency + ')',
          data: response.returningUsersAmounts,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  updateSources(period: string) {
    this.selectedPeriodSources = period;

    if (period === 'year') {
      this.selectedPeriodSource = this.dashboard.trafficSources12Month;
    } else if (period === '6 month') {
      this.selectedPeriodSource = this.dashboard.trafficSources6Month;
    } else if (period === 'month') {
      this.selectedPeriodSource = this.dashboard.trafficSources30Days;
    } else if (period === 'week') {
      this.selectedPeriodSource = this.dashboard.trafficSources7Days;
    }
  }
}
