import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {
  pageHeader = "Choose Payment Method";


  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {}

  // Need Default Payment Method

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
