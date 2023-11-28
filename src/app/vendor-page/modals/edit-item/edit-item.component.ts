import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent  implements OnInit {
  pageHeader = "Edit Item"

  constructor(
    public modalCtrl: ModalController
    ) { }

  ngOnInit() {}

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  addQ() {
    
  }
  minusQ() {

  }

}
