export interface Expense {
  id: number;
  accountId: number;
  description: string;
  amount: number;
  category: number; // This could be an enum for better type safety
}
