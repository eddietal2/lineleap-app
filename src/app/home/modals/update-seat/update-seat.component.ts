import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-seat',
  templateUrl: './update-seat.component.html',
  styleUrls: ['./update-seat.component.scss'],
})
export class UpdateSeatComponent  implements OnInit {
  pageHeader = "Update Seat";

  constructor(
    public modalCtrl: ModalController) { }

  ngOnInit() {}

  next() {
    
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
