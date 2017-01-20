/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FutInterfaceService } from './fut-interface.service';

describe('FutInterfaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FutInterfaceService]
    });
  });

  it('should ...', inject([FutInterfaceService], (service: FutInterfaceService) => {
    expect(service).toBeTruthy();
  }));
});
