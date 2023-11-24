import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReOrderComponent } from 'src/app/activity/modals/re-order/re-order.component';


@Component({
  selector: 'app-prev-order-preview',
  templateUrl: './prev-order-preview.component.html',
  styleUrls: ['./prev-order-preview.component.scss'],
})
export class PrevOrderPreviewComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async reOrder() {
    const modal = await this.modalCtrl.create({
      component: ReOrderComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

}
