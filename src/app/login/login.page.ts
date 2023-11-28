import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SignUpComponent } from './modals/sign-up/sign-up.component';
import { ForgotComponent } from './modals/forgot/forgot.component';
import { LoginWithComponent } from './modals/login-with/login-with.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email: any;
  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.initializeFormGroups();
   }

  ngOnInit() {
  }
  google() {
  }
  onSubmit() {

  }

  /**
   * 
   */
  loginForm!: FormGroup;
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one uppcase character, and one number.'}
    ]
  };
  initializeFormGroups() {
    this.loginForm = this.formBuilder.group({
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['1234', [
        Validators.required,
        Validators.pattern,
        Validators.minLength(6),
        Validators.maxLength(50),
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ]]
    });

    this.loginForm.valueChanges.subscribe( data => {
      console.log(data);
    })
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
