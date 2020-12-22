import { TestBed } from '@angular/core/testing';

import { UpdscriptsService } from './updscripts.service';

describe('UpdscriptsService', () => {
  let service: UpdscriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdscriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
