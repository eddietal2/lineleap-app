import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CustomComponentsModule } from '../components/custom-components.module';

// Modals
import { OrderHelpComponent } from './modals/order-help/order-help.component';
import { VenueAndSeatComponent } from './modals/venue-and-seat/venue-and-seat.component';
import { TicketInfoComponent } from './modals/ticket-info/ticket-info.component';
import { UpdateSeatComponent } from './modals/update-seat/update-seat.component';
import { ConfirmComponent } from './modals/confirm/confirm.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [
    HomePage, 
    OrderHelpComponent, 
    VenueAndSeatComponent, 
    TicketInfoComponent,
    UpdateSeatComponent,
    ConfirmComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
