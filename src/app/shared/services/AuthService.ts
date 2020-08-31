import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private hc: HttpClient) {
  }

  user = null;
  uid: number;
  profile: any;
  psw: any;

  login(user): Observable<any> {
    const userData = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    return this.hc.post<any>(
      `${environment.API_URL}/login`,
      userData,
      {withCredentials: true});
  }

  logout(): Observable<{ success: boolean }> {
    // @ts-ignore
    return this.hc.post<{ success: boolean }>(
      `${environment.API_URL}/logout`,
      {withCredentials: true});
  }

  getUser(): Observable<any> {
    return this.hc.get<any>(
      `${environment.API_URL}/checkLogin`,
      {withCredentials: true}
    );
  }

  // @ts-ignore
  newUser(user): Observable<any> {
    return this.hc.post<any>(
      `${environment.API_URL}/users`,
      user,
      {withCredentials: true});

  }

  updateUserInfo(p): Observable<any> {
    return this.hc.put<any>(
      `${environment.API_URL}/userInfos`,
      p,
      {withCredentials: true}
    );
  }

  checkUser(username): Observable<any> {
    return this.hc.post<any>(
      `${environment.API_URL}/users/checkuser`,
      username,
      {withCredentials: true});
  }


  changePass(user): Observable<any> {
    return this.hc.put<any>(
      `${environment.API_URL}/users/changePassword`,
      user,
      {withCredentials: true});
  }

  sendEmailForForgetPassword(email: any): Observable<any> {
    return this.hc.post(`${environment.API_URL}/mail/forgetPassword`, email);
  }
}
