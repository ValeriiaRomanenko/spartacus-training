import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPaymentDetailsComponent } from './st-payment-details.component';

describe('StPaymentDetailsComponent', () => {
  let component: StPaymentDetailsComponent;
  let fixture: ComponentFixture<StPaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPaymentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
