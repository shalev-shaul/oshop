import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataMemberService } from '../services/data-member.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user;
  constructor(private dataUser: DataMemberService, private router: Router) {
    this.dataUser.user.subscribe((result) => {
      this.user = result;
    });
  }

  userLoggin() {
    if (Object.keys(this.user).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.dataUser.logout();
  }
}
