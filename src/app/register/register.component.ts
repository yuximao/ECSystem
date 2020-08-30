import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: '',
    password: '',
    email: '',
    userInfo: {
      phoneNumber: '',
      firstName: '',
      middleName: '',
      lastName: '',
      occupation: '',
      mailAddress: ''
    }
  };
  repass: '';
  showalert = false;
  passwordNotSame = true;
  showwarn = false;
  checkName = false;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register(form) {
    this.auth.newUser(this.user)
      .subscribe(res => {
        if (res.success) {
          this.auth.login(this.user)
            .subscribe(ress => {
              if (ress.success) {
                this.auth.getUser()
                  .subscribe(u => {
                    this.auth.user = u.user;
                    this.auth.uid = u.user.id;
                    this.auth.psw = this.user.password;
                    this.showalert = true;
                  });
              } else {
                alert('login wrong!');
              }
            });
        } else {
          alert('sorry, not success!');
        }
      });
  }

  getinput(e) {
    if (this.user.password === e.target.value){
      this.passwordNotSame = false;
      this.showwarn = false;
    }else{
      this.passwordNotSame = true;
      this.showwarn = true;
    }
  }

  goHome() {
    this.showalert = false;
    this.router.navigateByUrl('/home');
  }

  getName(e) {
    this.auth.checkUser(e.target.value)
      .subscribe(res => {
        this.checkName = res;
      });
  }
}
