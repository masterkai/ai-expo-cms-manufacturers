import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionTheme } from './exhibition-theme';

describe('ExhibitionTheme', () => {
  let component: ExhibitionTheme;
  let fixture: ComponentFixture<ExhibitionTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
