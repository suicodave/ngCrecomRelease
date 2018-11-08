import { TestBed } from '@angular/core/testing';

import { LoanReleaseService } from './loan-release.service';

describe('LoanReleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanReleaseService = TestBed.get(LoanReleaseService);
    expect(service).toBeTruthy();
  });
});
