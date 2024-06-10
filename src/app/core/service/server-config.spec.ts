import { TestBed } from '@angular/core/testing';

import { ServerConfig } from './server-config';

describe('ServerConfig', () => {
  let service: ServerConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
