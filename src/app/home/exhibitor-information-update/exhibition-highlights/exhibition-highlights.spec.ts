import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionHighlights } from './exhibition-highlights';

describe('ExhibitionHighlights', () => {
  let component: ExhibitionHighlights;
  let fixture: ComponentFixture<ExhibitionHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionHighlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionHighlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
