import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { VendorsPage } from './vendors.page';
import { VendorsServiceService } from 'src/services/vendors/vendors-service.service';

describe('VendorsPage Intialization', () => {
  let component: VendorsPage;
  let fixture: ComponentFixture<VendorsPage>;
  let vendorsService: VendorsServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorsPage],
      providers: [VendorsServiceService],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorsPage);
    component = fixture.componentInstance;
    vendorsService = TestBed.inject(VendorsServiceService);
    fixture.detectChanges();
  });

  it('should have successfully been created', () => {
    expect(component).toBeTruthy();
  });

  
  it('should be injected with a Vendors Service', () => {
    expect(vendorsService).toBeTruthy();
  });

  it('should be able to get a list of vendors from the VendorService', () => {
    expect(vendorsService).toBeFalsy();
   })

    // afterEach(() => {
    //   fixture.destroy();
    // })
});

// describe('VendorsPage Behavior', () => {
    
//   it('should be able to display a list of vendors for a given venue', () => {
    
//   });

//   it('', () => {
    
//   });
// })
