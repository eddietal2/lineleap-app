import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityPage } from './activity.page';
import { ActivityPageRoutingModule } from './activity-routing.module';
import { CustomComponentsModule } from '../components/custom-components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ActivityPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [ActivityPage]
})
export class ActivityModule {}
