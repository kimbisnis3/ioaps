import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { UsersAddPage } from '../users-add/users-add.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  id = 0;

  constructor(
    private nav : NavController,
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: UsersAddPage,
      componentProps: {
        custom_id: this.id
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log('okeeeee')
    });
    modal.present()
  }

}
