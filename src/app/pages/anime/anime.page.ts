import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {
  results: Observable<any>;
  limit: string = '10';
  q: string = '';

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
  }

  getAnime() {
    this.results = this.ApiService.getAnime(this.q, this.limit);
  }

  PostAnime() {
    this.ApiService.PostAnime();
  }

}
