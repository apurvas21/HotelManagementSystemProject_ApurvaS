import { TestBed } from '@angular/core/testing';

import { AdmincrudService } from './admincrud.service';

describe('AdmincrudService', () => {
  let service: AdmincrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
