import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Models/account.model'; // Update this path
import { CreateAccountDto } from '../Models/create-account-dto.model';
// @ts-ignore
import { CreateIncomeDto } from '../Models/create-income-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'https://localhost:7118/api/';

  constructor(private http: HttpClient) {}

  createAccount(accountDto: CreateAccountDto): Observable<Account> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Account>(`${this.apiUrl}Account/create-account`, accountDto, { headers });
  }

  getUserAccounts(): Observable<Account[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Account[]>(`${this.apiUrl}Account/user-accounts`, { headers });
  }

  addIncome(incomeDto: CreateIncomeDto): Observable<Account> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Account>(`${this.apiUrl}Account/add-income`, incomeDto, { headers });
  }

  updateAccount(id: number, accountDto: CreateAccountDto): Observable<Account> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Account>(`${this.apiUrl}Account/${id}`, accountDto, { headers });
  }
}
