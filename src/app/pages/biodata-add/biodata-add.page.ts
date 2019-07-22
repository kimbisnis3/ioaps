import { Component, OnInit } from '@angular/core';
import { BiodataService } from './../../services/biodata.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-biodata-add',
  templateUrl: './biodata-add.page.html',
  styleUrls: ['./biodata-add.page.scss'],
})
export class BiodataAddPage implements OnInit {

  loaderToShow: any;
  constructor(
    private BiodataService: BiodataService, 
    private alertController: AlertController,
    private router: Router,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
  }
  
  PostBiodata(data) {
    this.BiodataService.PostBiodata(data);
  }

  simpan(form){
    this.showLoader();
    this.BiodataService.PostBiodata(form.value).subscribe( data => {
      if (data['status'] == 'success') {
        console.log('data berhasil');
        form.reset();
        this.hideLoader();
        this.alertSukses();
      }
    });
  }

  async askSimpan(form) {
    const alert = await this.alertController.create({
      header: 'Kirim Data ?',
      message: 'Pastikan Data Sudah Benar',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.simpan(form)
          }
        }
      ]
    });
    await alert.present();
  }

  async alertSukses() {
    const alert = await this.alertController.create({
      header: 'Sukses',
      message: 'Data Berhasil Disimpan',
      buttons: [
        {
          text: 'Kembali',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['/biodata']);
          }
        },
        {
          text: 'Input Kembali',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }
  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Memuat'
    }).then((res) => {
      res.present();
    });
  }
 
  hideLoader() {
      this.loadingController.dismiss();
  }

}
