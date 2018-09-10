import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

declare var $;

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('Authorization')) {
            return true;
        }
        this.router.navigate(['/dang-nhap']);
        return false;
    }
}
