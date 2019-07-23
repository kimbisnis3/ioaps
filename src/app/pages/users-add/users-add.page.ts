import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.page.html',
  styleUrls: ['./users-add.page.scss'],
})
export class UsersAddPage implements OnInit {
  
  loaderToShow : any;

  constructor(
    private userService: UserService, 
    private alertController: AlertController,
    private router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  PostData(data) {
    this.userService.PostData(data);
  }

  simpan(form){
    this.showLoader();
    this.userService.PostData(form.value).subscribe( data => {
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
            this.router.navigate(['/users']);
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
