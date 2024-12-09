import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
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

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
