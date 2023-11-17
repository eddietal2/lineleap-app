import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevOrdersAtVenueComponent } from './prev-orders-at-venue.component';

describe('PrevOrdersAtVenueComponent', () => {
  let component: PrevOrdersAtVenueComponent;
  let fixture: ComponentFixture<PrevOrdersAtVenueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevOrdersAtVenueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevOrdersAtVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
