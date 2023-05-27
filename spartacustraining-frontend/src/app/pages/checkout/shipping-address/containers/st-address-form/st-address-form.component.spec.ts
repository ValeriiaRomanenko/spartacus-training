import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StAddressFormComponent } from './st-address-form.component';

describe('StAddressFormComponent', () => {
  let component: StAddressFormComponent;
  let fixture: ComponentFixture<StAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
