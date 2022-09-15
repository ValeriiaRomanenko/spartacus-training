import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProductGridItemComponent } from './st-product-grid-item.component';

describe('StProductGridItemComponent', () => {
  let component: StProductGridItemComponent;
  let fixture: ComponentFixture<StProductGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StProductGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StProductGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
