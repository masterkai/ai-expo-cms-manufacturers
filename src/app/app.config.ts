import {
	ApplicationConfig,
	importProvidersFrom,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection
} from '@angular/core';
import {
	InMemoryScrollingFeature,
	InMemoryScrollingOptions,
	provideRouter,
	withComponentInputBinding,
	withInMemoryScrolling
} from '@angular/router';

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
		provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
		importProvidersFrom(MatSnackBarModule, MyConfirmModule),
		providePrimeNG({
			theme: {
				preset: definePreset(Aura, {
					semantic: {
						primary: {
							50: '{slate.50}',
							100: '{slate.100}',
							200: '{slate.200}',
							300: '{slate.300}',
							400: '{slate.400}',
							500: '{slate.500}',
							600: '{slate.600}',
							700: '{slate.700}',
							800: '{slate.800}',
							900: '{slate.900}',
							950: '{slate.950}'
						}
					}
				}),
				options: {
					colorScheme: 'amber',
					darkModeSelector: 'none'
				}
			},
			ripple: true
		}),
		{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LdttLMpAAAAAFisITBl7dqvIc24adjh83qnfvhQ" }
	]
};
