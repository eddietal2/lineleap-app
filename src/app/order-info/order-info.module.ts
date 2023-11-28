import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OrderInfoPageRoutingModule } from './order-info-routing.module';
import { OrderInfoPage } from './order-info.page';
import { CustomComponentsModule } from '../components/custom-components.module';
import { CancelComponent } from './modals/cancel/cancel.component';
import { CustomTipComponent } from './modals/custom-tip/custom-tip.component';
import { PaymentComponent } from './modals/payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    OrderInfoPageRoutingModule
  ],
  declarations: [
    OrderInfoPage,
    CancelComponent,
    CustomTipComponent,
    PaymentComponent
  ]
})
export class OrderInfoPageModule {}
