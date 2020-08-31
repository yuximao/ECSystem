import { Component } from '@angular/core';
import {AuthService} from './shared/services/AuthService';
import {AutoLogoutService} from './shared/services/AutoLogoutService';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECSystem';
  constructor(public auth: AuthService, public autoLogout: AutoLogoutService, public cookie: CookieService,
              public router: Router) {
    this.autoLogout.check();
    this.autoLogout.initListener();
    this.autoLogout.initInterval();
  }

  showalert = false;


  logout() {
    this.cookie.deleteAll();
    this.auth.logout()
      .subscribe(res => {
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
