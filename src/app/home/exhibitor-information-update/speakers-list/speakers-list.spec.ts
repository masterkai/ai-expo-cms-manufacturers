import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersList } from './speakers-list';

describe('SpeakersList', () => {
  let component: SpeakersList;
  let fixture: ComponentFixture<SpeakersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
