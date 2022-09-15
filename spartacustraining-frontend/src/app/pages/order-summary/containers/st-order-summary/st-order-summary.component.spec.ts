import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StOrderSummaryComponent } from './st-order-summary.component';

describe('StOrderSummaryComponent', () => {
  let component: StOrderSummaryComponent;
  let fixture: ComponentFixture<StOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StOrderSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
