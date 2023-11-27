import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {
  @ViewChild('referralSlider') swiperRef: ElementRef | undefined;
  pageHeader = "Payment Methods";

  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.swiperRef?.nativeElement.swiper.setTransition(0);
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
  back() {
    this.swiperRef?.nativeElement.swiper.slideTo(0);
  }
  viewMethod() {
    this.swiperRef?.nativeElement.swiper.slideTo(1);
  }
  addMethod() {
    this.swiperRef?.nativeElement.swiper.slideTo(2);
  }
  addMethodType() {
    this.swiperRef?.nativeElement.swiper.slideTo(3);
  }
  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
