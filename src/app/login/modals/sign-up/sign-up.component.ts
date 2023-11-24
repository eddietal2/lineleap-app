import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit, AfterViewInit {
  @ViewChild('signUpSwiper') swiperRef: ElementRef | undefined;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) { 
    }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.swiperRef);
  }

  useCamera() {

  }

  useLibrary() {

  }

  next() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  async done() {
    // Display Toast AFTER Modal has dismissed
    const toast = await this.toastCtrl.create({
      message: "Let's start ording some food by logging in!",
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
