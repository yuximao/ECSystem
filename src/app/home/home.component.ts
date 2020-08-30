import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/AuthService';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {browser} from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private router: Router,
    private cookie: CookieService
    ) { }
  showalert = false;

  ngOnInit(): void {
  }

  logout() {
    this.cookie.deleteAll();
    this.auth.logout()
      .subscribe(res => {
        console.log(res);
        if (res.success) {
          this.auth.user = null;
          this.auth.profile = null;
          this.auth.uid = null;
          this.auth.psw = null;
          this.showalert = true;
        }
      });
  }

  goHome() {
    this.showalert = false;
    this.router.navigateByUrl('/home');

  }
}
