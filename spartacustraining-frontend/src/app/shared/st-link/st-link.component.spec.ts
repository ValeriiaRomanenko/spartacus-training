import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StLinkComponent } from './st-link.component';

describe('StLinkComponent', () => {
  let component: StLinkComponent;
  let fixture: ComponentFixture<StLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
