import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StReviewOrderComponent } from './st-review-order.component';

describe('StReviewOrderComponent', () => {
  let component: StReviewOrderComponent;
  let fixture: ComponentFixture<StReviewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StReviewOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StReviewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
