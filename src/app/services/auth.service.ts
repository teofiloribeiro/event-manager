import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { map, delay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly API = `${environment.API}auth/authenticate`;
  private token = '';
  
  isAuthenticated: boolean = false;
  showNavBarEmitter = new EventEmitter<boolean>()
  constructor(private http: HttpClient, private router: Router) { }

  login(form) {
    
    
    console.log(form);
    
    return this.http.post<any>(this.API, form)
      .pipe(
        delay(200),
        map ( res => {
          if(res && res.token){
            console.log(res);
            this.token = res.token;
            sessionStorage.setItem("Token",this.token);
            this.isAuthenticated = true;
            this.showNavBarEmitter.emit(true);
            
            this.router.navigate(['/events']);
          }
          
          return res;
        })
      )
  }

  isUserAuthenticated(){
    return this.isAuthenticated;
  }
}
