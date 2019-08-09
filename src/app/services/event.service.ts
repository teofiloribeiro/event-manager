import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { Event } from '../model/event';
import { Guest } from '../model/guest';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly API =  environment.API;

  constructor(private http: HttpClient, private router: Router) { }

  getEvents() {        
    return this.http.get<Event>(`${this.API}events`)
    .pipe(
      delay(200),
      tap(
        console.log
      )
     );  
  }

  createEvent(form){
    return this.http.post<any>(`${this.API}events`, form);
  }

  createGuest(guest: Guest, event){
    
  }

}
