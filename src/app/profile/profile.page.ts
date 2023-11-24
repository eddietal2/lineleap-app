import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeleteComponent } from './modals/delete/delete.component';
import { EditPhotoComponent } from './modals/edit-photo/edit-photo.component';
import { EditProfileComponent } from './modals/edit-profile/edit-profile.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { NotificationsComponent } from './modals/notifications/notifications.component';
import { PaymentComponent } from './modals/payment/payment.component';
import { ReferralComponent } from './modals/referral/referral.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loggedIn = true;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  logIn() {
    this.router.navigateByUrl('/login');
  }
  async referral() {
    const modal = await this.modalCtrl.create({
      component: ReferralComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  async editProfile() {
    const modal = await this.modalCtrl.create({
      component: EditProfileComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  async editPhoto() {
    const modal = await this.modalCtrl.create({
      component: EditPhotoComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  async notifications() {
    const modal = await this.modalCtrl.create({
      component: NotificationsComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  async payment() {
    const modal = await this.modalCtrl.create({
      component: PaymentComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  async logout() {
    const modal = await this.modalCtrl.create({
      component: LogoutComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  async deleteProfile() {
    const modal = await this.modalCtrl.create({
      component: DeleteComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

}
