import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInteceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = sessionStorage.getItem('Token');
    req = req.clone({
      setHeaders:{
        'Authorization': `Bearer ${token}`
      }
    })
    console.log(req)
    return next.handle(req);
  };
}
