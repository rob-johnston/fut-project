/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FutLoginService } from './fut-login.service';

describe('FutLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FutLoginService]
    });
  });

  it('should ...', inject([FutLoginService], (service: FutLoginService) => {
    expect(service).toBeTruthy();
  }));
});
