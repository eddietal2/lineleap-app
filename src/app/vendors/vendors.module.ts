import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendorsPage } from './vendors.page';

import { VendorsPageRoutingModule } from './vendors-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VendorsPageRoutingModule
  ],
  declarations: [VendorsPage]
})
export class VendorsModule {}
