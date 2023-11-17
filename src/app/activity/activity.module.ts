import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityPage } from './activity.page';

import { ActivityPageRoutingModule } from './activity-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ActivityPageRoutingModule
  ],
  declarations: [ActivityPage]
})
export class ActivityModule {}
