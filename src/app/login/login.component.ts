import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showalert = false;
  emailAlart = false;
  forgetPasswordChecked = false;
  email = '';

  constructor(public auth: AuthService, private router: Router) {
  }

  checkingBox(e: { target: { checked: any } }) {
    if (e.target.checked) {
      this.forgetPasswordChecked = true;
    } else {
      this.forgetPasswordChecked = false;
    }
  }

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
        } else {
          this.showalert = true;
        }
      });
  }

  sendEmail() {
    let emailAddress = [];
    emailAddress.push(this.email);
    this.auth.sendEmailForForgetPassword(emailAddress)
      .subscribe((res: any) => {
      if (res.success) {
        this.forgetPasswordChecked = false;
      } else {
        this.emailAlart = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
