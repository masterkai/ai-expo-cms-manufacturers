import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";

export const commonGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);

	if (localStorage.getItem('auth_token') !== null) {
		return router.navigate(["/"]);
	}

	return true;
};
