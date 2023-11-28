import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddItemComponent } from './modals/add-item/add-item.component';
import { EditItemComponent } from './modals/edit-item/edit-item.component';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.page.html',
  styleUrls: ['./vendor-page.page.scss'],
})
export class VendorPagePage implements OnInit { 
  isDelivery = true;
  loggedIn = true;
  // Needs to be added to Service
  selectedItems = [
    1
  ]
  menu = [
    1, 2, 3, 4, 5
  ]

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/tabs/vendors')
  }
  logIn() {
    this.router.navigateByUrl('/login')
  }
  async viewItem() {
    const modal = await this.modalCtrl.create({
      component: AddItemComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  async editItem() {
    const modal = await this.modalCtrl.create({
      component: EditItemComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  setDelivery() {
    this.isDelivery = true;
  }
  setPickup() {
    this.isDelivery = false;
  }
  viewOrder() {
    this.router.navigateByUrl('/order-info')
  }

}
