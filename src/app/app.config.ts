import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from './app.routes';

import { provideTranslateService, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/**
 * Factory for ngx-translate HTTP loader.
 * Loads translation JSON files from the configured assets/i18n path.
 */
const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (
  http: HttpClient
) => new TranslateHttpLoader();

/**
 * Global application configuration (standalone bootstrap).
 * Registers router, HttpClient, animations, and ngx-translate.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: () => httpLoaderFactory,
        deps: [HttpClient],
      },
    }), provideAnimationsAsync(),
  ],
};