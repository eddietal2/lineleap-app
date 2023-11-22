import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent  implements OnInit {
  @Input() modal: any;
  @Input() pageHeader: any;

  constructor(
    public modalCtrl: ModalController) { }

  ngOnInit() {}

  back() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
