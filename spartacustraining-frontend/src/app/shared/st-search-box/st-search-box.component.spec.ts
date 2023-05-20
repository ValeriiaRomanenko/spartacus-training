import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StSearchBoxComponent } from './st-search-box.component';

describe('StSearchBoxComponent', () => {
  let component: StSearchBoxComponent;
  let fixture: ComponentFixture<StSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
