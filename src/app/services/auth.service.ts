import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/auth/authenticate';
  isAuthenticated: boolean = false;
  showNavBarEmitter = new EventEmitter<boolean>()
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.isAuthenticated = true;
    this.showNavBarEmitter.emit(true);
    this.router.navigate(['/events']);
    //return this.http.post<any>(this.url, { email, password });
  }

  isUserAuthenticated(){
    return this.isAuthenticated;
  }
}
