import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-venue-and-seat',
  templateUrl: './venue-and-seat.component.html',
  styleUrls: ['./venue-and-seat.component.scss'],
})
export class VenueAndSeatComponent  implements OnInit {
  pageHeader = "Help";

  constructor(
    public modalCtrl: ModalController) { }

  ngOnInit() {}

  next() {
    
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
