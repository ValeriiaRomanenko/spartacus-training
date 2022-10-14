import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StTest1cmsComponent } from './st-test1cms.component';

describe('StTest1cmsComponent', () => {
  let component: StTest1cmsComponent;
  let fixture: ComponentFixture<StTest1cmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StTest1cmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StTest1cmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
