import { Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  checkedEditAddress = false;
  changePassword = false;
  passwordNotSame = false;
  showwarn = false;
  currentPasswordNotSame = false;
  newPassword: string;
  name: string;
  user;
  constructor(public auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this.auth.user === null){
      this.router.navigateByUrl('/home');
    }
    this.user = this.auth.user;
    this.name = this.auth.user.username;
  }
  getNewPassword(e) {
    this.newPassword = e.target.value;
  }

  getCurrentPassword(e) {
    if (this.auth.psw === e.target.value) {
      this.currentPasswordNotSame = false;
    } else {
      this.currentPasswordNotSame = true;
    }
  }

  getinput(e) {
    if (this.newPassword !== e.target.value) {
      this.passwordNotSame = true;
    } else {
      this.passwordNotSame = false;
    }
  }

  checkingBox(e: { target: { checked: any } }) {
    if (e.target.checked) {
      this.checkedEditAddress = true;
    } else {
      this.checkedEditAddress = false;
    }
  }

  passwordCheckBox(e: { target: { checked: any } }) {
    if (e.target.checked) {
      this.changePassword = true;
    } else {
      this.changePassword = false;
    }
  }

  saveChanges(formData) {
    this.auth.updateUserInfo(formData.value).subscribe((res) => {
    });
    this.checkedEditAddress = false;
  }

  savePassword(formData: {
    value: {
      name: string;
      id: number;
      currentPassword: string;
      newPassword: string;
      confirmedPassword: string;
    };
  }) {
    if (this.passwordNotSame || this.currentPasswordNotSame) {
    } else {
      this.user.username = this.name;
      this.user.password = this.newPassword;
      this.auth.changePass(this.user)
        .subscribe(res => {
          if (res.success){
            this.router.navigateByUrl('/home');
          }
          else {
          }
        });
    }
  }
}
