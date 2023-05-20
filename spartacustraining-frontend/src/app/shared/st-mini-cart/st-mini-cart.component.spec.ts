import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMiniCartComponent } from './st-mini-cart.component';

describe('StMiniCartComponent', () => {
  let component: StMiniCartComponent;
  let fixture: ComponentFixture<StMiniCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMiniCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StMiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
