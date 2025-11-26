import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndCheckPreviewList } from './review-and-check-preview-list';

describe('ReviewAndCheckPreviewList', () => {
  let component: ReviewAndCheckPreviewList;
  let fixture: ComponentFixture<ReviewAndCheckPreviewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAndCheckPreviewList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAndCheckPreviewList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
