import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly API =  environment.API ;
  private token = '';
  
  
  constructor(private http: HttpClient, private router: Router) { }

  getEvents() {        
    return this.http.get<any>(`${this.API}events`);      
  }

  createEvent(form){
    return this.http.post<any>(`${this.API}events`, form);
  }

}
