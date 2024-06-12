import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../Models/expense.model'; // Update this path

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'https://localhost:7118/api/Expense/user-expenses';

  constructor(private http: HttpClient) { }

  getUserExpenses(): Observable<Expense[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Expense[]>(this.apiUrl, { headers });
  }
}
