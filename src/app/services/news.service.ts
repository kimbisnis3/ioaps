import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://localhost/ioaps_api/api/uni/news';

  constructor(private http: HttpClient) { }

  loadnews(): Observable<any>{
    return this.http.get(`${this.url}`).pipe(
      map(results => results)
    );
  }

  getloadnews() {
    return this.http.get(this.url)
    .pipe(
      map(results => results)
    );
  }
}
