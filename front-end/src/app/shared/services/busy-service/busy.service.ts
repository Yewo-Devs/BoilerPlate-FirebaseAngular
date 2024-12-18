import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyRequestCount = 0;
  constructor(private spinnerService: NgxSpinnerService) {}

  private resetTimer: any;

  private startTimer() {
    this.resetTimer = setTimeout(() => {
      this.idle();
    }, 60000);
  }

  private clearTimer() {
    if (this.resetTimer) {
      clearTimeout(this.resetTimer);
      this.resetTimer = null;
    }
  }

  busy() {
    this.clearTimer();
    this.busyRequestCount++;

    this.spinnerService.show(undefined, {
      type: 'ball-clip-rotate',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
    });

    this.startTimer();
  }

  idle() {
    this.clearTimer();
    this.busyRequestCount = 0;
    this.spinnerService.hide();
  }
}
