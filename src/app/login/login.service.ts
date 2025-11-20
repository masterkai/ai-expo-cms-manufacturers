import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../app.interface';
import { environment } from '../../environments/environment';
import { AuthResponse, LoginResponse } from './interface';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private http = inject(HttpClient);
    
    login(email: string, password: string,recaptcha_token:string) {
        return this.http.post<ApiResponse<LoginResponse>>(`${environment.apiUrl}/login`, {
            email: email,
            password:password,
            "g-recaptcha-response":recaptcha_token
        });
    }

    auth(one_time_pass:string,login_data:string,verify_code:string) {
        return this.http.post<ApiResponse<AuthResponse>>(`${environment.apiUrl}/login/auth`, {
            one_time_pass: one_time_pass,
            login_data:login_data,
            verify_code:verify_code
        });
    }

    logout(){
        return this.http.post<ApiResponse<null>>(`${environment.apiUrl}/logout`,{});
    }

}
