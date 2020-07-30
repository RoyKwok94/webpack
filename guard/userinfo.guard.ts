import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
@Injectable()
export class UserinfoGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate() {
        const userInfo = JSON.parse(sessionStorage.getItem('traderBaseInfo'));
        console.log(userInfo)
        if (userInfo) {
            if (userInfo.TraderName !== '' || (userInfo.VirtualCompanyId !== 0 && userInfo.ShopId !== '') ) {
                return true;
            } else {
                this.router.navigateByUrl('/personal/edit');
            }
        } else {
            this.router.navigateByUrl('/index');
        }

    }
}
