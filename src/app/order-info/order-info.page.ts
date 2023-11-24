import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {
  pageHeader = "New Order";
  constructor(
    public modalCtrl: ModalController,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  placeOrder() {

  }
  close() {
    this.router.navigateByUrl('/tabs');;
  }

}
