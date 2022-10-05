import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPaymentFormComponent } from './st-payment-form.component';

describe('StPaymentFormComponent', () => {
  let component: StPaymentFormComponent;
  let fixture: ComponentFixture<StPaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPaymentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
