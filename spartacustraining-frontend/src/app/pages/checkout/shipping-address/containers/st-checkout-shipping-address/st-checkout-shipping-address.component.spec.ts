import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCheckoutShippingAddressComponent } from './st-checkout-shipping-address.component';

describe('StCheckoutShippingAddressComponent', () => {
  let component: StCheckoutShippingAddressComponent;
  let fixture: ComponentFixture<StCheckoutShippingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StCheckoutShippingAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StCheckoutShippingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
