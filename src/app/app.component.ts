import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Movies',
      url: 'movies',
      icon: 'videocam'
    },
    {
      title: 'Berita',
      url: 'berita',
      icon: 'bookmarks'
    },
    {
      title: 'Anime',
      url: 'anime',
      icon: 'camera'
    },
    {
      title: 'Biodata',
      url: 'biodata',
      icon: 'person'
    },
  ];

  urlActive = this.router.url;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#e53935');
      this.splashScreen.hide();
    });
  }

  keluarApp() {
    console.log('seharusnya keluar');
  }

}
