import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AppService } from '../app.service';
import { DOCUMENT } from '@angular/common';

export const weblogGuard: CanActivateFn = (route, state) => {
    const appService = inject(AppService);
    const doc = inject(DOCUMENT);
    const baseUrl = doc.getElementsByTagName('base')[0]?.href.slice(0, -1);

    appService.weblog(baseUrl+state.url).subscribe();
    return true;
};
