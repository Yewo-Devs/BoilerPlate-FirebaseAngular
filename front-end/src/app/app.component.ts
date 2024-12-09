import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(environment.saasName);
  }
}
