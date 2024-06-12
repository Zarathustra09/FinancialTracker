import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Models/account.model'; // Update this path

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'https://localhost:7118/api/Account/user-accounts';

  constructor(private http: HttpClient) { }

  getUserAccounts(): Observable<Account[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Account[]>(this.apiUrl, { headers });
  }
}
