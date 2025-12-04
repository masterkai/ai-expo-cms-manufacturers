import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAutoCropper } from './face-auto-cropper';

describe('FaceAutoCropper', () => {
  let component: FaceAutoCropper;
  let fixture: ComponentFixture<FaceAutoCropper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceAutoCropper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceAutoCropper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
