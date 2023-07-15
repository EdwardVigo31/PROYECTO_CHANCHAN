import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
    providedIn: 'root'
})
export class NormalGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {

    }

    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'NORMAL') {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }

}
