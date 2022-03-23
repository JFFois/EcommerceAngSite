import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bp-login-component',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    public pretrad: string;
    public mail: string;
    public password: string;

    constructor(
        private router: Router
    ) {
        this.pretrad = 'MODULES.USER.LOGIN.';
    }

    public register(): void {
        this.router.navigate(['/user/register']);
    }
}