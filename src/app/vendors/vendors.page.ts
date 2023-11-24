import { Component } from '@angular/core';
import { VendorsServiceService } from 'src/services/vendors/vendors-service.service';

@Component({
  selector: 'app-vendors',
  templateUrl: 'vendors.page.html',
  styleUrls: ['vendors.page.scss']
})
export class VendorsPage {
  test = "LOL";
  vendors = [
    'one', 'two', 'one', 'two', 'one', 'two', 'one', 'two',
  ]
  constructor(
    private vendorsService: VendorsServiceService
  ) {}

  login() {

  }

  filter() {

  }
}
