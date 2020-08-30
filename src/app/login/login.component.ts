import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showalert = false;
  constructor(public auth: AuthService, private router: Router) {}
  Submit(form) {
    this.auth.login(form.value)
      .subscribe(res => {
        if (res.success) {
          this.auth.getUser()
            .subscribe(u => {
                this.auth.user = u.user;
                this.auth.uid = u.user.id;
                this.router.navigateByUrl('/home');
              }
            );
        } else {this.showalert = true; }
      });
  }

  ngOnInit(): void {
  }

}
