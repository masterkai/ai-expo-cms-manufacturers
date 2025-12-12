import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    
    if(localStorage.getItem('auth_token') === null)
    {
        return router.navigate(["/login"]);
    }
    
    return true;
};
