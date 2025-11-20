import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorResponse } from '../app.interface';
import { environment } from '../../environments/environment';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

    const _snackBar = inject(MatSnackBar);
    const router = inject(Router);

    return next(req).pipe(
        catchError((error:ErrorResponse) => {
            if(error.error.error.code>=9001 && error.error.error.code<=9008)
			{
				_snackBar.open('登入逾時，請重新登入','我知道了',{
					duration: 1500,
					panelClass:'warn'
				});

				localStorage.removeItem('auth_token');

				router.navigate(["/login"]);
			}
			else if(error.error.error.code==403)
			{
				_snackBar.open('沒有權限','我知道了',{
					panelClass:'error'
				});
			}
			else if(error.error.error.code==404)
			{
				router.navigate(["/"]);
			}
			else if(error.error.error.code==500)
			{
				if(environment.production)
				{
					_snackBar.open('發生不明錯誤，請重整再試一次或聯絡系統負責人','我知道了',{
						panelClass:'error'
					});
				}
			}

            return throwError(() => error);
        })
    );
};
