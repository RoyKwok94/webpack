import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { HttpClients } from "../http-clients";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private http: HttpClients, private router: Router, ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const hasToken: boolean = this.http.isSetToken();
    if (!hasToken) {
      this.router.navigateByUrl('login-land');
    }
    return hasToken;
  }

}


