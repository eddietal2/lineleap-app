import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-custom-tip',
  templateUrl: './custom-tip.component.html',
  styleUrls: ['./custom-tip.component.scss'],
})
export class CustomTipComponent  implements OnInit {
  pageHeader = "Custom Tip";

  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {}
  setTipAmount() {
    
  }
  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
