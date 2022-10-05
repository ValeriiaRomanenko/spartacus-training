import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCheckoutDeliveryModeComponent } from './st-checkout-delivery-mode.component';

describe('StCheckoutDeliveryModeComponent', () => {
  let component: StCheckoutDeliveryModeComponent;
  let fixture: ComponentFixture<StCheckoutDeliveryModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StCheckoutDeliveryModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StCheckoutDeliveryModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
