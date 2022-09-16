import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StEmptyCartComponent } from './st-empty-cart.component';

describe('StEmptyCartComponent', () => {
  let component: StEmptyCartComponent;
  let fixture: ComponentFixture<StEmptyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StEmptyCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StEmptyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
