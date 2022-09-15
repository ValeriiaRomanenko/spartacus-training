import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProductScrollComponent } from './st-product-scroll.component';

describe('StProductScrollComponent', () => {
  let component: StProductScrollComponent;
  let fixture: ComponentFixture<StProductScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StProductScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StProductScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
