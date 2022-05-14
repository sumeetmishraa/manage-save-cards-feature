import { TestBed } from '@angular/core/testing';

import { ManageCardService } from './manage-card.service';

describe('ManageCardService', () => {
  let service: ManageCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
