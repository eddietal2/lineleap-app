import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateSeatComponent } from '../update-seat/update-seat.component';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss'],
})
export class TicketInfoComponent  implements OnInit {
  pageHeader = "Ticket Info";

  constructor(
    public modalCtrl: ModalController) { }

  ngOnInit() {}

  next() {
    
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async editSeatModal() {

    const modal = await this.modalCtrl.create({
      component: UpdateSeatComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

}
