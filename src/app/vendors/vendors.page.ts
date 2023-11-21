import { Component } from '@angular/core';
import { VendorsServiceService } from 'src/services/vendors/vendors-service.service';

@Component({
  selector: 'app-vendors',
  templateUrl: 'vendors.page.html',
  styleUrls: ['vendors.page.scss']
})
export class VendorsPage {
  test = "LOL";
  constructor(
    private vendorsService: VendorsServiceService
  ) {}

}
