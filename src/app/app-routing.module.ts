import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: '', redirectTo: 'berita', pathMatch: 'full' },
  { path: 'berita', loadChildren: './pages/berita/berita.module#BeritaPageModule' },
  { path: 'berita/:id', loadChildren: './pages/berita-details/berita-details.module#BeritaDetailsPageModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
