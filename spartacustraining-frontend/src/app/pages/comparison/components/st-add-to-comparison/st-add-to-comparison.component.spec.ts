import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StAddToComparisonComponent } from './st-add-to-comparison.component';

describe('StAddToComparisonComponent', () => {
  let component: StAddToComparisonComponent;
  let fixture: ComponentFixture<StAddToComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StAddToComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StAddToComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
