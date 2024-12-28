import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();

  // Get the domain from the browser's URL
  const currentDomain = window.location.origin;

  // Update the API URL dynamically based on the current domain
  environment.apiUrl = `${currentDomain}/api/`;
  environment.clientUrl = `${currentDomain}/`;
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
