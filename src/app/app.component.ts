import { Component } from '@angular/core';
import {AuthService} from './shared/services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECSystem';
  constructor(private auth: AuthService) {
  }

  // ngOnInit(): void {
  //   this.auth.getUser()
  //     .subscribe(u => {
  //       if (u.success) {
  //         this.auth.user = u.user;
  //         this.auth.uid = u.user.id;
  //         this.auth.getProfile(this.auth.uid)
  //           .subscribe(p => {
  //               this.auth.profile = p;
  //             });
  //       }
  //     });
  // }
}
