import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule}  from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { RecaptchaV3Module, ReCaptchaV3Service } from "ng-recaptcha";
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorResponse } from '../app.interface';
import { environment } from '../../environments/environment';
import { Welcome } from "./welcome/welcome";

@Component({
    selector: 'app-login',
	imports: [FormsModule, MatCheckboxModule, MatButtonModule, RecaptchaV3Module, ButtonModule, InputOtpModule, Welcome],
    templateUrl: './login.html',
    styleUrl: './login.scss'
})
export class Login implements  OnInit {

    private recaptchaV3Service = inject(ReCaptchaV3Service);
    private router = inject(Router);
    private loginService = inject(LoginService);
    private _snackBar = inject(MatSnackBar);

    protected step=signal(0);
    protected account = localStorage.getItem('account') || '';
    protected password ='';
    protected accountError = signal('');
    protected passwordError = signal('');
    protected codeError = signal('');

    protected passwordType = signal('password');
    protected rememberMe = signal(false);
    protected loading = signal(false);
    protected verificationCode = '';
    private one_time_pass = '';
    private login_data = '';

    ngOnInit(): void {
        if(!environment.production)
        {
            const value = localStorage.getItem('auth_token');
            if (value)
            {
                localStorage.setItem('auth_token', value);
                this.router.navigateByUrl('/');
            }
        }
    }

    togglePasswordType() {
        this.passwordType.set(this.passwordType() === 'password' ? 'text' : 'password');
    }

    submit():void{
        if(this.account && this.password)
        {
            this.accountError.set('');
            this.passwordError.set('');
            
            this.recaptchaV3Service.execute('importantAction')
            .subscribe((token) => this.login(token));
        }
        else
        {
            this.accountError.set(this.account == '' ? '請輸入帳號' : '');
            this.passwordError.set(this.password == '' ? '請輸入密碼' : '');
        }
    }
    

    login(recaptcha_token:string):void{
        this.loading.set(true);
        this.loginService.login(this.account, this.password, recaptcha_token).subscribe({
            next: (response) => {
                if(response.success)
                {
                    this.loading.set(false);
                    if(this.rememberMe())
                    {
                        localStorage.setItem('account',this.account);
                    }
                    else
                    {
                        localStorage.removeItem('account');
                    }
                    this.one_time_pass = response.data.one_time_pass;
                    this.login_data = response.data.login_data;
                    this.step.set(1);
                }
                else
                {
                    this.passwordError.set('帳號或密碼有誤，請重新輸入');
                }
            },
            error: (err:ErrorResponse) => {
                this.loading.set(false);
                if(err.error.error.code==2002)
                {
                    this._snackBar.open('帳號密碼有誤，請重新輸入', '我知道了', {
                        panelClass:'error',
                        duration: 3000 
                    });
                }
                else if(err.error.error.code==2003)
                {
                    this._snackBar.open('此帳號沒有權限', '我知道了', {
                        panelClass:'error',
                        duration: 3000 
                    });
                }
                else
                {
                    this._snackBar.open('系統發生錯誤，請稍後再試', '我知道了', {
                        panelClass:'error',
                        duration: 3000 
                    });
                }
            }
        });
    }

    verify(){
        this.loading.set(true);
        this.loginService.auth(this.one_time_pass, this.login_data, this.verificationCode).subscribe({
            next: (response) => {
                if(response.success)
                {
                    this.loading.set(false);
                    localStorage.setItem('auth_token',response.data.token);
                    this.router.navigateByUrl('/');
                }
            },
            error: (err:ErrorResponse) => {
                this.loading.set(false);
                if(err.error.error.code==2001)
                {
                    this._snackBar.open('驗證碼錯誤，請重新輸入', '我知道了', {
                        panelClass:'error',
                        duration: 3000 
                    });
                }
                else
                {
                    this._snackBar.open('系統發生錯誤，請稍後再試', '我知道了', {
                        panelClass:'error',
                        duration: 3000 
                    });
                }
            }
        });
    }
}
