import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.auth);
  }


}
