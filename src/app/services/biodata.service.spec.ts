import { TestBed } from '@angular/core/testing';

import { BiodataService } from './biodata.service';

describe('BiodataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiodataService = TestBed.get(BiodataService);
    expect(service).toBeTruthy();
  });
});
