import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  url = 'http://localhost/ioaps_api/api/uni';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) { }

  getBiodata(limit: string) {
    return this.http.get(`${this.url}/biodata?limit=${limit}`);
  }

  getBiodataDet(id) {
    return this.http.get(`${this.url}/biodata_det/${id}`);
  }

  PostBiodata(data) {
    return this.http.post(this.url + '/biodata_post', data, this.httpOptions);
  }

  deleteBiodata(id) {
    return this.http.get(`${this.url}/biodata_delete/${id}`)
  }

}
