import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProductComparisonComponent } from './st-product-comparison.component';

describe('StProductComparisonComponent', () => {
  let component: StProductComparisonComponent;
  let fixture: ComponentFixture<StProductComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StProductComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StProductComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
