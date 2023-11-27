import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss'],
})
export class EditPhotoComponent  implements OnInit {
  pageHeader = "Edit Photo";
  proPicUploaded = false;
  
  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController
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
