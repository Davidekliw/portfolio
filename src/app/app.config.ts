import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideTranslateService } from "@ngx-translate/core";

/**
 * Global application configuration (standalone bootstrap).
 * Registers router, HttpClient, animations, and ngx-translate.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService(),
    provideAnimationsAsync(),
  ],
};