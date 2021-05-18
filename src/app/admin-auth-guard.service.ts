import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DataMemberService } from './services/data-member.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService implements CanActivate {
  user;
  constructor(private dataUser: DataMemberService, private router: Router) {
    this.dataUser.user.subscribe((result) => {
      this.user = result;
    });
  }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.user.isAdmin) return true;

    this.router.navigate(['/']);
    return false;
  }
}
