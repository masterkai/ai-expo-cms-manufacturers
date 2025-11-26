import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorInformationUpdate } from './exhibitor-information-update';

describe('ExhibitorInformationUpdate', () => {
  let component: ExhibitorInformationUpdate;
  let fixture: ComponentFixture<ExhibitorInformationUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitorInformationUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitorInformationUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
