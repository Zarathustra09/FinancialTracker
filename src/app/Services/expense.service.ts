import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../Models/expense.model';
import { CreateExpenseDto } from '../Models/create-expense-dto.model';
import { Account } from '../Models/account.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'https://localhost:7118/api/';

  constructor(private http: HttpClient) {}

  createExpense(expenseDto: CreateExpenseDto): Observable<Expense> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Expense>(`${this.apiUrl}Expense/create-expense`, expenseDto, { headers });
  }

  getUserExpenses(): Observable<Expense[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Expense[]>(`${this.apiUrl}Expense/user-expenses`, { headers });
  }

  getUserAccounts(): Observable<Account[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Account[]>(`${this.apiUrl}Account/user-accounts`, { headers });
  }
}
