import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProductListItemComponent } from './st-product-list-item.component';

describe('StProductListItemComponent', () => {
  let component: StProductListItemComponent;
  let fixture: ComponentFixture<StProductListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StProductListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
