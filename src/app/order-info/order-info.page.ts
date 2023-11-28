import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CancelComponent } from './modals/cancel/cancel.component';
import { CustomTipComponent } from './modals/custom-tip/custom-tip.component';
import { PaymentComponent } from './modals/payment/payment.component';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {
  pageHeader = "New Order";
  photoUploaded = false;
  orderItems = [
    1, 2, 3, 4
  ]
  constructor(
    public modalCtrl: ModalController,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  placeOrder() {

  }
  editItem() {
    
  }
  deleteItem() {

  }
  async cancelOrder() {
    const modal = await this.modalCtrl.create({
      component: CancelComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }

  }
  async customTip() {
    const modal = await this.modalCtrl.create({
      component: CustomTipComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }

  }
  async choosePaymentMethod() {
    const modal = await this.modalCtrl.create({
      component: PaymentComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }

  }
  close() {
    this.router.navigateByUrl('/tabs');;
  }

}
