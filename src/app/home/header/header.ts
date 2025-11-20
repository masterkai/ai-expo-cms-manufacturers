import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, Router } from "@angular/router";
import { LoginService } from '../../login/login.service';

@Component({
    selector: 'app-header',
    imports: [FormsModule, MatButtonModule, MatMenuModule, RouterLink],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {

    private loginService = inject(LoginService);
    private router = inject(Router);

    logout():void{
        this.loginService.logout().subscribe({
            next: (response) => {
                if(response.success)
                {
                    localStorage.removeItem('auth_token');
                    this.router.navigateByUrl('/login');
                }
            },
        });
    }

}
