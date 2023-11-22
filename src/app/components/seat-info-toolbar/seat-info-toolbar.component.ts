import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TicketInfoComponent } from 'src/app/home/modals/ticket-info/ticket-info.component';

@Component({
  selector: 'app-seat-info-toolbar',
  templateUrl: './seat-info-toolbar.component.html',
  styleUrls: ['./seat-info-toolbar.component.scss'],
})
export class SeatInfoToolbarComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openTicketInfo() {
    const modal = await this.modalCtrl.create({
      component: TicketInfoComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }

  }

}
