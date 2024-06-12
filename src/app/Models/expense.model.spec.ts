import { Expense } from './expense.model';

describe('Expense', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Expense()).toBeTruthy();
  });
});
