import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent  implements OnInit {
  pageHeader = "Add Item"

  constructor(
    public modalCtrl: ModalController) { }

  ngOnInit() {}

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  addQ() {
    
  }
  minusQ() {

  }

}
