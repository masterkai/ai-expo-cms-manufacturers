import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    var currentUrl = window.location.href;

    //如果body有router參數，則使用body的router參數 (weblog用)
    if (typeof req.body === 'object' && req.body !== null && 'router' in req.body)
    {
        currentUrl = String((req.body as { router: string }).router);
    }

    const authToken = localStorage.getItem('auth_token');
    const headers = authToken
        ? req.headers.append('Authorization', `Bearer ${authToken}`)
        : req.headers;
    const newReq = req.clone({
        headers: headers.append('X-LITE-DT-URL', currentUrl),
    });

    return next(newReq);

};
