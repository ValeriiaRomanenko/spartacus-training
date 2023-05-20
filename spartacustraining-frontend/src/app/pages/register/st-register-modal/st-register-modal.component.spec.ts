import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StRegisterModalComponent } from './st-register-modal.component';

describe('StRegisterModalComponent', () => {
  let component: StRegisterModalComponent;
  let fixture: ComponentFixture<StRegisterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StRegisterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
