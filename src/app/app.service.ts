import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './app.interface';
import { environment } from './../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    private http = inject(HttpClient);
        
    weblog(router:string='') {
        return this.http.post<ApiResponse<null>>(`${environment.apiUrl}/web-log`, { router:router });
    }
    

}
