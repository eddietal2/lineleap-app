import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomComponentsModule } from '../components/custom-components.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';

// Modals
import { ReferralComponent } from './modals/referral/referral.component';
import { EditProfileComponent } from './modals/edit-profile/edit-profile.component';
import { EditPhotoComponent } from './modals/edit-photo/edit-photo.component';
import { NotificationsComponent } from './modals/notifications/notifications.component';
import { PaymentComponent } from './modals/payment/payment.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { DeleteComponent } from './modals/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfilePage,
    ReferralComponent,
    EditProfileComponent,
    EditPhotoComponent,
    NotificationsComponent,
    PaymentComponent,
    LogoutComponent,
    DeleteComponent
  ]
})
export class ProfileModule {}
