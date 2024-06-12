import { Account } from './account.model';

describe('Account', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Account()).toBeTruthy();
  });
});
