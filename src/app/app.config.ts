import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule, withHashLocation } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation())]
};
