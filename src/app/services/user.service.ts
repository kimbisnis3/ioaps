import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost/ioaps_api/api/uni';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) { }
  
  PostData(data) {
    return this.http.post(this.url + '/users_post', data, this.httpOptions);
  }
}
