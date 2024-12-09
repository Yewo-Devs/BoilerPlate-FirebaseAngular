import { TestBed } from '@angular/core/testing';

import { AccountManagementGuard } from './account-management.guard';

describe('AccountManagementGuard', () => {
  let guard: AccountManagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccountManagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
