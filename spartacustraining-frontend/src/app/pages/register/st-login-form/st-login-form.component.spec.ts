import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StLoginFormComponent } from './st-login-form.component';

describe('StLoginFormComponent', () => {
  let component: StLoginFormComponent;
  let fixture: ComponentFixture<StLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
