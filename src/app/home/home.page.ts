import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderHelpComponent } from './modals/order-help/order-help.component';
import { VenueAndSeatComponent } from './modals/venue-and-seat/venue-and-seat.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  loggedIn = false;
  seatLocated = true;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
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

  }


}
