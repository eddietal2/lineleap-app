import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss'],
})
export class CancelComponent  implements OnInit {
  pageHeader = "Cancel Order";

  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {}
  cancelOrder() {
    
  }
  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
