import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  results : Observable<any>;
  

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // console.log(this.loaddata());
    // this.loaddata();
  }

  loaddata() {
    this.results = this.newsService.getloadnews();
  }

  doloaddata() {
    this.loaddata()
  }
  


}
