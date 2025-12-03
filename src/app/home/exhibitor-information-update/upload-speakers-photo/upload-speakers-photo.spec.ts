import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSpeakersPhoto } from './upload-speakers-photo';

describe('UploadSpeakersPhoto', () => {
  let component: UploadSpeakersPhoto;
  let fixture: ComponentFixture<UploadSpeakersPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSpeakersPhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSpeakersPhoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
