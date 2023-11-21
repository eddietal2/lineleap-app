import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendorsPage } from './vendors.page';
import { VendorsPageRoutingModule } from './vendors-routing.module';
import { CustomComponentsModule } from '../components/custom-components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VendorsPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [VendorsPage]
})
export class VendorsModule {}
