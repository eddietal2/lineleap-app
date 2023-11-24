import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatInfoToolbarComponent } from './seat-info-toolbar/seat-info-toolbar.component';
import { VendorPreviewComponent } from './vendor-preview/vendor-preview.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { OrderItemPreviewComponent } from './order-item-preview/order-item-preview.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    SeatInfoToolbarComponent,
    VendorPreviewComponent,
    ModalHeaderComponent,
    OrderItemPreviewComponent
  ],
  declarations: [
    SeatInfoToolbarComponent,
    VendorPreviewComponent,
    ModalHeaderComponent,
    OrderItemPreviewComponent
  ]
})
export class CustomComponentsModule {}
