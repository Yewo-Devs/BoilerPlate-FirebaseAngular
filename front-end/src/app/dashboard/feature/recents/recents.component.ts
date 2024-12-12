import { Component, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../data-access/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { Menu } from 'primeng/menu';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';

@Component({
  selector: 'app-recents',
  standalone: false,
  templateUrl: './recents.component.html',
  styleUrl: './recents.component.css',
})
export class RecentsComponent {
  @ViewChildren('menuq') menus!: QueryList<Menu>;

  items: any[] = [];

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private toastService: ToastrService,
    private preferencesService: PreferencesService
  ) {}

  ngOnInit(): void {
    this.dashboardService
      .getItems(this.preferencesService.getPreferences().user.id)
      .subscribe(
        (response: any) => {
          this.items = response;
        },
        (error) => {
          this.toastService.error('Something went wrong please try again');
        }
      );
  }

  menu(offer: any, event: any, index: number) {
    const menu = this.menus.toArray()[index]; // Get the specific menu by index
    menu.toggle(event);
  }
}
