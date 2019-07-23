import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { HomePage } from './../../home/home.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  passedId = null;
  
  constructor(
    private navParams : NavParams,
    private modalController : ModalController
    ) { }

  ngOnInit() {
    this.passedId = this.navParams.get('custom_id');
    console.log(this.navParams);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
