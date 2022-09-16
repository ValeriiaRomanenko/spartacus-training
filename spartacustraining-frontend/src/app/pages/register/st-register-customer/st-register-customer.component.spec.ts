import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StRegisterCustomerComponent } from './st-register-customer.component';

describe('StRegisterCustomerComponent', () => {
  let component: StRegisterCustomerComponent;
  let fixture: ComponentFixture<StRegisterCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StRegisterCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StRegisterCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
