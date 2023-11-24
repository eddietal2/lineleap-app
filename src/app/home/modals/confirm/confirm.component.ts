import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent  implements OnInit, AfterViewInit {
  @ViewChild('confirmOrderSwiper') swiperRef: ElementRef | undefined;
  pageHeader = "Confirm Order";

  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController,
    public router: Router,
    ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.swiperRef);
  }
  
  next() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  async done() {
    this.close();
    // Display Toast AFTER Modal has dismissed
    const toast = await this.toastCtrl.create({
      message: "Your order has been complete!",
      duration: 5000,
      position: 'bottom',
      cssClass: 'success-toast'
    })
    return this.modalCtrl.dismiss(null, 'cancel')
      .then(() => {
        toast.present();
      });
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
