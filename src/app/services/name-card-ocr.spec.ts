import { TestBed } from '@angular/core/testing';

import { NameCardOcr } from './name-card-ocr';

describe('NameCardOcr', () => {
  let service: NameCardOcr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameCardOcr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
