import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCardOcrImport } from './name-card-ocr-import';

describe('NameCardOcrImport', () => {
  let component: NameCardOcrImport;
  let fixture: ComponentFixture<NameCardOcrImport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameCardOcrImport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameCardOcrImport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
