import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthService} from './shared/services/AuthService';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CookieService} from 'ngx-cookie-service';
import { RegisterComponent } from './register/register.component';
import {RepeatValidatorDirective} from './register/RepeatValidatorDirective';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import {DataService} from './shared/services/DataService';
import {AutoLogoutService} from './shared/services/AutoLogoutService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    RepeatValidatorDirective,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AuthService, CookieService, DataService, AutoLogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
