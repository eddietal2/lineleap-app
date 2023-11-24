import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-with',
  templateUrl: './login-with.component.html',
  styleUrls: ['./login-with.component.scss'],
})
export class LoginWithComponent  implements OnInit {
  @Input() type: any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
