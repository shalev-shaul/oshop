import { TestBed } from '@angular/core/testing';

import { DataMemberService } from './data-member.service';

describe('DataMemberService', () => {
  let service: DataMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
