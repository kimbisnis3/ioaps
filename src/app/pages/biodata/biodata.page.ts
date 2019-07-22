import { Component, OnInit } from '@angular/core';
import { BiodataService } from './../../services/biodata.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.page.html',
  styleUrls: ['./biodata.page.scss'],
})
export class BiodataPage implements OnInit {
  results: Observable < any > ;
  limit: string = '';
  nama: string = '';
  hp: string = '';
  showFilter: boolean = true;
  showList: boolean = true;
  showForm: boolean = false;
  loaderToShow: any;

  constructor(
    private BiodataService: BiodataService,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getBiodata();
  }

  addData(){
    this.showForm = true;
    this.showList = false;
  }

  getBiodata() {
    this.results = this.BiodataService.getBiodata(this.limit).pipe(
      map(results => results)
    );
  }

  reloadData() {
    setTimeout(() => {
      this.getBiodata();
    }, 500);
  }

  deleteBiodata(id) {
    this.BiodataService.deleteBiodata(id).subscribe((data)=>{
      this.getBiodata();
    });
    
  }

  async askHapus(id) {
    const alert = await this.alertController.create({
      header: 'Yakin Hapus Data ?',
      message: 'Hapus Data Selamanya',
      buttons: [{
        text: 'Batal',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Hapus',
        handler: () => {
          this.deleteBiodata(id)
        }
      }]
    });
    await alert.present();
  }

  async alertSukses() {
    const alert = await this.alertController.create({
      header: 'Sukses',
      message: 'Data Berhasil Dihapus',
      buttons: [{
        text: 'Kembali',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {

        }
      }]
    });
    await alert.present();
  }

  async sheetOpen(nama, id) {
    const actionSheet = await this.actionSheetController.create({
      header: nama,
      buttons: [{
          text: 'Edit',
          icon: 'create',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Delete',
          icon: 'trash',
          handler: () => {
            this.askHapus(id)
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();

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