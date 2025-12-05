import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpeakerForm } from './add-speaker-form';

describe('AddSpeakerForm', () => {
  let component: AddSpeakerForm;
  let fixture: ComponentFixture<AddSpeakerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSpeakerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpeakerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
