import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatInfoToolbarComponent } from './seat-info-toolbar/seat-info-toolbar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [SeatInfoToolbarComponent],
  declarations: [SeatInfoToolbarComponent]
})
export class CustomComponentsModule {}
