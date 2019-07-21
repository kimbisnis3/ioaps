import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
 
@Component({
  selector: 'app-berita-details',
  templateUrl: './berita-details.page.html',
  styleUrls: ['./berita-details.page.scss'],
})
export class BeritaDetailsPage implements OnInit {
 
  information = null;
 
  constructor(private activatedRoute: ActivatedRoute, private ApiService: ApiService) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.ApiService.getBeritaDet(id).subscribe(result => {
      this.information = result;
    });
  }
 
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}