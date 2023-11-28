import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorPagePageRoutingModule } from './vendor-page-routing.module';
import { VendorPagePage } from './vendor-page.page';
import { AddItemComponent } from './modals/add-item/add-item.component';
import { EditItemComponent } from './modals/edit-item/edit-item.component';
import { CustomComponentsModule } from '../components/custom-components.module';
import { ItemPreviewComponent } from '../components/item-preview/item-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    VendorPagePageRoutingModule
  ],
  declarations: [
    VendorPagePage,
    AddItemComponent,
    EditItemComponent,
    ItemPreviewComponent
  ]
})
export class VendorPagePageModule {}
