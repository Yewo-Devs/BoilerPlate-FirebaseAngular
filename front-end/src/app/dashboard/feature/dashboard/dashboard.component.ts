import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { NotificationService } from '../../../shared/services/notification-service/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { EmailService } from '../../../shared/services/email-service/email.service';
import { DarkModeService } from '../../../shared/services/dark-mode-service/dark-mode.service';
import { Router } from '@angular/router';
import { TicketService } from '../../../shared/services/ticket-service/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  value: any = {};

  justifyOptions: any[] = [
    { icon: 'pi pi-sun', value: 'Light Mode' },
    { icon: 'pi pi-moon', value: 'Dark Mode' },
  ];

  isSidebarOpen = false;

  menuItems = [
    {
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          command: () => {
            this.isSidebarOpen = false;
            this.router.navigateByUrl('/dashboard/profile');
          },
        },
        {
          label: 'Team',
          icon: 'pi pi-users',
          command: () => {
            this.isSidebarOpen = false;
            this.router.navigateByUrl('/dashboard/team');
          },
        },
        {
          label: 'Billing',
          icon: 'pi pi-money-bill',
          command: () => {
            this.isSidebarOpen = false;
            this.router.navigateByUrl('/dashboard/billing');
          },
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => {
            this.logout();
          },
        },
      ],
    },
  ];

  user;
  profile;
  saasName = environment.saasName;
  notificationCount: number = 0;
  visible: boolean = false;
  visibleTicket: boolean = false;

  suggestionForm: FormGroup;
  ticketForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private preferencesService: PreferencesService,
    private notificationService: NotificationService,
    public darkModeService: DarkModeService,
    private accountService: AccountService,
    private toastService: ToastrService,
    private busyService: BusyService,
    private emailService: EmailService,
    private ticketService: TicketService
  ) {
    this.value = darkModeService.isDarkMode()
      ? { icon: 'pi pi-moon', value: 'Dark Mode' }
      : { icon: 'pi pi-sun', value: 'Light Mode' };

    this.user = this.preferencesService.getPreferences().user;
    this.profile = this.preferencesService.getPreferences().profile;
  }

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      suggestion: ['', [Validators.required]],
    });

    this.ticketForm = this.fb.group({
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });

    this.notificationService
      .getNotificationCount(this.user.id)
      .subscribe((response: number) => {
        this.notificationCount = response;
      });
  }

  share() {
    if (navigator.share) {
      navigator
        .share({
          title: this.saasName,
          text: 'Check out this app!',
          url: window.location.origin,
        })
        .then(() => {})
        .catch((error) => {});
    } else {
      //Copy url to clipboard
      navigator.clipboard.writeText(window.location.origin);
      //Show toast message
      this.toastService.success('Link copied to clipboard');
    }
  }

  themeSelect() {
    if (this.value.value === 'Light Mode') {
      this.darkModeService.setLightTheme();
    } else {
      this.darkModeService.setDarkTheme();
    }
  }

  logout() {
    this.accountService.logout();
  }

  onSubmit() {
    this.visible = false;

    let suggestionDto = {
      name: this.profile.firstName + ' ' + this.profile.lastName,
      email: this.user.email,
      message: this.suggestionForm.controls.suggestion.value,
    };

    this.suggestionForm.reset();

    this.busyService.busy();

    this.emailService.SendSuggestion(suggestionDto).subscribe(
      (response) => {
        this.busyService.idle();

        this.toastService.success(
          'We have received your suggestion, thank you.',
          'Suggestion Received'
        );
      },
      (error) => {
        this.busyService.idle();

        this.toastService.error(
          'Something went wrong please try again.',
          'Suggestion Failed'
        );
      }
    );
  }

  onSubmitTicket() {
    this.visibleTicket = false;

    this.busyService.busy();

    let ticketDto = {
      title: this.ticketForm.controls.title.value,
      description: this.ticketForm.controls.description.value,
      archived: false,
      createdDate: new Date(),
      modifiedDate: new Date(),
      createdBy: this.user.email,
      priority: this.ticketForm.controls.priority.value,
    };

    this.ticketForm.reset();

    this.ticketService.createTicket(ticketDto).subscribe(
      (response) => {
        this.busyService.idle();

        this.toastService.success(
          'Your ticket has been successfully created. We will respond to you via email shortly.',
          'Ticket Created'
        );
      },
      (error) => {
        this.busyService.idle();

        this.toastService.error(
          'Something went wrong please try again.',
          'Ticket Failed'
        );
      }
    );
  }
}
