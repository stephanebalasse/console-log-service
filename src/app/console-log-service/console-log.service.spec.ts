import { TestBed } from '@angular/core/testing';

import { ConsoleLogService } from './console-log.service';

describe('ConsoleLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsoleLogService = TestBed.get(ConsoleLogService);
    expect(service).toBeTruthy();
  });
});
