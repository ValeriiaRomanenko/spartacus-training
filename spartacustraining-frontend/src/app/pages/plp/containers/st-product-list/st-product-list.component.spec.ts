import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProductListComponent } from './st-product-list.component';

describe('StProductListComponent', () => {
  let component: StProductListComponent;
  let fixture: ComponentFixture<StProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
