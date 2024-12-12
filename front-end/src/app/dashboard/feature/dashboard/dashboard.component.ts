import { Component } from '@angular/core';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  value: any = { icon: 'pi pi-sun', justify: 'Light Mode' };

  justifyOptions: any[] = [
    { icon: 'pi pi-sun', justify: 'Light Mode' },
    { icon: 'pi pi-moon', value: 'Dark Mode' },
  ];

  user = this.preferencesService.getPreferences().user;
  profile = this.preferencesService.getPreferences().profile;
  saasName = environment.saasName;

  constructor(private preferencesService: PreferencesService) {}
}
