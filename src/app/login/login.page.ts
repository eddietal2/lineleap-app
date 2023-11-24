import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SignUpComponent } from './modals/sign-up/sign-up.component';
import { ForgotComponent } from './modals/forgot/forgot.component';
import { LoginWithComponent } from './modals/login-with/login-with.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
google() {
throw new Error('Method not implemented.');
}

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.router.navigateByUrl('tabs/home');
  }

  async forgotPassword() {
    const modal = await this.modalCtrl.create({
      component: ForgotComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

  }

  async signUp() {
    const modal = await this.modalCtrl.create({
      component: SignUpComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
  }

  async loginWith(type: string) {
    const modal = await this.modalCtrl.create({
      component: LoginWithComponent,
      componentProps: {
        type
      }
    });
    if(type=="google") {
      modal.present();
      
    }
    if(type=="facebook") {
      modal.present();
    }
    const { data, role } = await modal.onWillDismiss();

  }

  close() {
    this.router.navigateByUrl('tabs/home');
  }

}
