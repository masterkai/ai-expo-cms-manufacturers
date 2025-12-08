import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyReviewProcessRecord } from './modify-review-process-record';

describe('ModifyReviewProcessRecord', () => {
  let component: ModifyReviewProcessRecord;
  let fixture: ComponentFixture<ModifyReviewProcessRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyReviewProcessRecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyReviewProcessRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
