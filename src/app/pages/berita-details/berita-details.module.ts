import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BeritaDetailsPage } from './berita-details.page';

const routes: Routes = [
  {
    path: '',
    component: BeritaDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BeritaDetailsPage]
})
export class BeritaDetailsPageModule {}
