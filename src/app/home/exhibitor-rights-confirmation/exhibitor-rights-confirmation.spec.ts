import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorRightsConfirmation } from './exhibitor-rights-confirmation';

describe('ExhibitorRightsConfirmation', () => {
  let component: ExhibitorRightsConfirmation;
  let fixture: ComponentFixture<ExhibitorRightsConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitorRightsConfirmation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitorRightsConfirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
