import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost/ioaps_api/api/uni';

  constructor(private http: HttpClient) { }

  loadnews(): Observable<any>{
    return this.http.get(`${this.url}`).pipe(
      map(results => results)
    );
  }

  getBerita(limit: string, judul: string) {
    return this.http.get(`${this.url}/berita?limit=${limit}&judul=${judul}`).pipe(
      map(results => results)
    );
  }

  getBeritaDet(id) {
    return this.http.get(`${this.url}/berita_det/${id}`);
  }
}
