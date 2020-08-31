import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/AuthService';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {browser} from 'protractor';
import {DataService} from '../shared/services/DataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public data: DataService,
  ) {
  }
  classResult = null;
  showalerts = false;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onFileUpload(event: any) {

    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const files: FileList = target.files;

    const formData: FormData = new FormData();

    formData.append('file', files[0]);
    this.data.sendFile(formData)
      .subscribe(res => {
        this.classResult = res;
      });
  }

}
