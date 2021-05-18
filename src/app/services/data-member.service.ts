import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { users } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataMemberService {
  user = new BehaviorSubject({});
  route;
  router;
  constructor(route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;
    if (localStorage.getItem('user')) {
      this.user.next(JSON.parse(localStorage.getItem('user')));
    }
  }

  logout() {
    this.user.next({});
    this.router.navigate(['/']);
    localStorage.removeItem('user');
  }

  login(form) {
    users;
    users.map((value) => {
      if (value.username == form.username && value.password == form.password) {
        this.user.next(value);
        localStorage.setItem('user', JSON.stringify(value));
        let returnUrl =
          this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        console.log(returnUrl);
        this.router.navigate([returnUrl]);
        console.log('loigin');
      }
    });
  }
}
