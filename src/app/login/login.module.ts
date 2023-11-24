import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

// Modals
import { SignUpComponent } from './modals/sign-up/sign-up.component';
import { ForgotComponent } from './modals/forgot/forgot.component';
import { LoginWithComponent } from './modals/login-with/login-with.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage, 
    SignUpComponent,
    ForgotComponent,
    LoginWithComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class LoginPageModule {}
