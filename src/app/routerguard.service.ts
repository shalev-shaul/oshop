import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DataMemberService } from './services/data-member.service';

@Injectable({
  providedIn: 'root',
})
export class RouterguardService implements CanActivate {
  user;
  constructor(private dataUser: DataMemberService, private router: Router) {
    this.dataUser.user.subscribe((result) => {
      this.user = result;
    });
  }

  canActivate(route, state: RouterStateSnapshot) {
    if (Object.keys(this.user).length > 0) {
      return true;
    }
    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}