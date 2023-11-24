import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: 'activity.page.html',
  styleUrls: ['activity.page.scss']
})
export class ActivityPage {
  loggedIn = true;
  orders = [
    'one', 'two', 'one', 'two', 'one', 'two', 'one', 'two',
  ]

  constructor() { }

  ngOnInit() {
  }

  logIn() {

  }

}
