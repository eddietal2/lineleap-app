import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-re-order',
  templateUrl: './re-order.component.html',
  styleUrls: ['./re-order.component.scss'],
})
export class ReOrderComponent  implements OnInit {
  pageHeader = "Re-Order";
  orderItems = [
    'one', 'two', 'three'
  ]

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    ) { }

  ngOnInit() {}

  confirmReOrder() {
    this.close();
    this.router.navigateByUrl('/order-info');
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
