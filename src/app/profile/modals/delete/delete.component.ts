import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent  implements OnInit {
  pageHeader = "Delete Profile";

  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public router: Router
    ) { }

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
