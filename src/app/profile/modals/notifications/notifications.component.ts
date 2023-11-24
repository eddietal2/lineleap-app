import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent  implements OnInit {
  pageHeader = "Notifications";

  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {}

  async done() {
    this.close();
    // Display Toast AFTER Modal has dismissed
    const toast = await this.toastCtrl.create({
      message: "Your order has been complete!",
      duration: 5000,
      position: 'bottom',
      cssClass: 'success-toast'
    })
    return this.modalCtrl.dismiss(null, 'cancel')
      .then(() => {
        toast.present();
      });
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
