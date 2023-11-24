import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderHelpComponent } from './modals/order-help/order-help.component';
import { VenueAndSeatComponent } from './modals/venue-and-seat/venue-and-seat.component';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/services/user/user-service.service';
import { ConfirmComponent } from './modals/confirm/confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  loggedIn = true;
  seatLocated = true;
  orderPlaced = true;
  isDelivery = true;
  orderItems = [
    'one', 'two', 'three'
  ]
  prevOrders = [
    'one', 'one', 'one', 'one',
  ];

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private userService: UserServiceService,
  ) {}

  ngOnInit() {
    this.locateSeat()
  }

  /**
   * 
   */
  async locateSeat() {
    console.log('Locating seat ...');
    if(!this.seatLocated) {
      
      const modal = await this.modalCtrl.create({
        component: VenueAndSeatComponent,
      });
      modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === 'confirm') {
        // this.message = `Hello, ${data}!`;
    }
    } else {

    }
  }

  /**
   * 
   */
  logIn() {
    this.router.navigateByUrl('/login');
  }

  /**
   * 
   */
  async help() {
    const modal = await this.modalCtrl.create({
      component: OrderHelpComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

  /**
   * 
   */
  vendors() {
    this.router.navigateByUrl('/tabs/vendors');
  }
  profileActivity() {
    this.router.navigateByUrl('/tabs/activity');
  }
  viewOrderInfo() {
    this.router.navigateByUrl('/order-info');
  }
  setDelivery() {
    this.isDelivery = true;
  }
  setPickup() {
    this.isDelivery = false;
  }
  async confirmOrder() {
    const modal = await this.modalCtrl.create({
      component: ConfirmComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }

  }
}
