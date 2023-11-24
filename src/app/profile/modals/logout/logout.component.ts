import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent  implements OnInit {
  pageHeader = "Logout";

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
