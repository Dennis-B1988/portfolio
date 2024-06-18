import { TestBed } from '@angular/core/testing';

import { CheckLanguageService } from './check-language.service';

describe('CheckLanguageService', () => {
  let service: CheckLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
