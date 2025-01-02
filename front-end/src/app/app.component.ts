import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from './shared/services/seo-service/seo.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private seoService: SeoService) {}
}
