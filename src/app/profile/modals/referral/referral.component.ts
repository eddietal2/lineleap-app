import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss'],
})
export class ReferralComponent  implements OnInit, AfterViewInit {
  @ViewChild('referralSlider') swiperRef: ElementRef | undefined;
  pageHeader = "Referrals";
  sendingCode = false;

  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController) { }
    
  ngAfterViewInit(): void {
  }

  ngOnInit() {}

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

  next(type: string) {
    if(type === 'have') {
      this.swiperRef?.nativeElement.swiper.slideTo(1);
    } else {
      this.swiperRef?.nativeElement.swiper.slideTo(2);
    }
  }
  back() {
    this.swiperRef?.nativeElement.swiper.slideTo(0);
  }

  sendReferralType(type: string) {
    console.log(type);
    this.swiperRef?.nativeElement.swiper.slideTo(3);
  }

  sendNewReferral() {
    
  }

  confirmCode() {
    // Confirm Code, then close
    // Alert or Toast?
    this.close();
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
