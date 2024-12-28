import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from './shared/services/seo-service/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  constructor(private seoService: SeoService) {}
}
