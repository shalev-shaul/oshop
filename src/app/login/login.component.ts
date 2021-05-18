import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, users } from 'src/environments/environment';
import { DataMemberService } from '../services/data-member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user;
  constructor(public dataUser: DataMemberService) {
    dataUser.user.subscribe((result) => {
      this.user = result;
    });
  }

  ngOnInit(): void {}

  login(form) {
    this.dataUser.login(form);
  }
}
