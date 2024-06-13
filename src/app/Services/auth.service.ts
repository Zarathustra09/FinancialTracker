import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register} from '../Models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7118/api/Authentication';

  constructor(private http: HttpClient) { }

  register(registerDto: Register): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerDto);
  }
}
