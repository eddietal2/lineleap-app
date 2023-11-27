import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendorPagePage } from './vendor-page.page';

describe('VendorPagePage', () => {
  let component: VendorPagePage;
  let fixture: ComponentFixture<VendorPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VendorPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
