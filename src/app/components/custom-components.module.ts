import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatInfoToolbarComponent } from './seat-info-toolbar/seat-info-toolbar.component';
import { VendorPreviewComponent } from './vendor-preview/vendor-preview.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    SeatInfoToolbarComponent,
    VendorPreviewComponent,
    ModalHeaderComponent
  ],
  declarations: [
    SeatInfoToolbarComponent,
    VendorPreviewComponent,
    ModalHeaderComponent
  ]
})
export class CustomComponentsModule {}
