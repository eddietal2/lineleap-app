import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VendorsPage } from './vendors.page';

describe('VendorsPage', () => {
  let component: VendorsPage;
  let fixture: ComponentFixture<VendorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
