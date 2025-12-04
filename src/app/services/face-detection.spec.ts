import { TestBed } from '@angular/core/testing';

import { FaceDetection } from './face-detection';

describe('FaceDetection', () => {
  let service: FaceDetection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceDetection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
