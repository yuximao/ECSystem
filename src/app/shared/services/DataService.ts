import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

  constructor(private hc: HttpClient) {
  }

  sendFile(formData): Observable<any> {
    return this.hc.post<any>(
      `http://localhost:8000/get_json/`,
      formData,
      {withCredentials: true});
  }
}
