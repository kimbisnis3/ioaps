import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost/ioaps_api/api/uni';
  url_berita = 'http://localhost/ioaps_api/api/uni';
  url_anime = 'https://api.jikan.moe/v3/search/anime';

  constructor(private http: HttpClient) { }

  loadnews(): Observable<any>{
    return this.http.get(`${this.url}`).pipe(
      map(results => results)
    );
  }

  getBerita(limit: string, judul: string) {
    return this.http.get(`${this.url_berita}/berita?limit=${limit}&judul=${judul}`).pipe(
      map(results => results)
    );
  }

  getBeritaDet(id) {
    return this.http.get(`${this.url_berita}/berita_det/${id}`);
  }

  getAnime(q: string, limit: string) {
    return this.http.get(`${this.url_anime}?q=${q}&limit=${limit}`).pipe(
      map(results => results['results'])
    );
  }

  PostAnime() {
    this.http.post(`${this.url_berita}/anime_post`,{
      "judul":  "Customer004",
      "subjudul":  "customer004@email.com",
      "ket":  "0000252525"
    }).subscribe(data  => { console.log("POST Request is successful ", data)},
    error  => {
      console.log("Error", error);
    })
  };

  getAnimeDet(id) {
    return this.http.get(`${this.url_anime}/${id}`);
  }

  
}
