import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners,provideZonelessChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY } from "ng-recaptcha";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MyConfirmModule } from './shared/module/my-confirm/my-confirm.module';
import { errorInterceptor } from './interceptor/error-interceptor';
import { authInterceptor } from './interceptor/auth-interceptor';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import { register } from 'swiper/element/bundle';

register();

const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes, inMemoryScrollingFeature, withComponentInputBinding()),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([authInterceptor,errorInterceptor])),
        importProvidersFrom(MatSnackBarModule, MyConfirmModule),
        providePrimeNG({
            theme: {
				preset: definePreset(Aura, {
                    semantic: {
                         primary: {
                            50: '{amber.50}',
                            100: '{amber.100}',
                            200: '{amber.200}',
                            300: '{amber.300}',
                            400: '{amber.400}',
                            500: '{amber.500}',
                            600: '{amber.600}',
                            700: '{amber.700}',
                            800: '{amber.800}',
                            900: '{amber.900}',
                            950: '{amber.950}'
                        }
                    }
                })
			},
			ripple: true
        }),
        { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LdttLMpAAAAAFisITBl7dqvIc24adjh83qnfvhQ" }
    ]
};
