import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StRefinementFacetComponent } from './st-refinement-facet.component';

describe('StRefinementFacetComponent', () => {
  let component: StRefinementFacetComponent;
  let fixture: ComponentFixture<StRefinementFacetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StRefinementFacetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StRefinementFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
