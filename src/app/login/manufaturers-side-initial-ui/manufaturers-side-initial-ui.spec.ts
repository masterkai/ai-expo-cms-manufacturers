import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturersSideInitialUi } from './manufaturers-side-initial-ui';

describe('ManufaturersSideInitialUi', () => {
  let component: ManufaturersSideInitialUi;
  let fixture: ComponentFixture<ManufaturersSideInitialUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufaturersSideInitialUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufaturersSideInitialUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
