import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { delay, tap, take } from 'rxjs/operators';
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

  private createEvent(form: Event){
    return this.http.post<any>(`${this.API}events`, form);
  }

  getEventById(id: string){
    return this.http.get<Event>(`${this.API}events/${id}`)
  }

  private updateEvent(form: Event){
    console.log("kkk")
    console.log(form)
    return this.http.put<any>(`${this.API}events/${form._id}`, form)
  }

  saveEvent(event:Event){
    if(event._id){
      return this.updateEvent(event);
    }
    return this.createEvent(event);
  }
  createGuest(event:Event, guest: Guest){
    console.log(event);
    event.guest.push(guest);
    console.log(event)
    console.log(guest);
    return this.updateEvent(event);
  }

}
