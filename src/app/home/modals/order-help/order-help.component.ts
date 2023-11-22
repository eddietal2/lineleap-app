import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-help',
  templateUrl: './order-help.component.html',
  styleUrls: ['./order-help.component.scss'],
})
export class OrderHelpComponent  implements OnInit {
  pageHeader = "Help";

  constructor(
    public modalCtrl: ModalController) {}

  ngOnInit() {}

  next() {
    
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }


}
