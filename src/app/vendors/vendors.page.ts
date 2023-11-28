import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendorsServiceService } from 'src/services/vendors/vendors-service.service';

@Component({
  selector: 'app-vendors',
  templateUrl: 'vendors.page.html',
  styleUrls: ['vendors.page.scss']
})
export class VendorsPage {
  test = "LOL";
  loggedIn = false;
  vendors = [
    'one', 'two', 'one', 'two', 'one', 'two', 'one', 'two',
  ]
  constructor(
    private vendorsService: VendorsServiceService,
    private router: Router
  ) {}

  login() {

  }

  filter() {

  }

  viewVendor() {
    this.router.navigateByUrl('/vendor-page');
  }
}
