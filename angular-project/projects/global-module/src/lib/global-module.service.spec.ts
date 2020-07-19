import { TestBed } from '@angular/core/testing';

import { GlobalModuleService } from './global-module.service';

describe('GlobalModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalModuleService = TestBed.get(GlobalModuleService);
    expect(service).toBeTruthy();
  });
});
