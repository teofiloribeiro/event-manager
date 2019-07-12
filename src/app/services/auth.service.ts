import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/auth/authenticate';
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(this.url, { email, password });
  }
}
