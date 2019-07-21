
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.page.html',
  styleUrls: ['./berita.page.scss'],
})

export class BeritaPage implements OnInit {
  results: Observable<any>;
  jmlData: string = '';
  judul: string = '';

  constructor(private ApiService: ApiService) { }
 
  ngOnInit() { 
    this.getBerita();
  }
 
  getBerita() {
    this.results = this.ApiService.getBerita(this.jmlData, this.judul);
  }

}