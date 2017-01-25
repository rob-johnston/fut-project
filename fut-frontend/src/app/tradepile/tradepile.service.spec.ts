/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TradepileService } from './tradepile.service';

describe('TradepileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradepileService]
    });
  });

  it('should ...', inject([TradepileService], (service: TradepileService) => {
    expect(service).toBeTruthy();
  }));
});
