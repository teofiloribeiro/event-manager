import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
import { EventService } from '../services/event.service';

@Injectable({
  providedIn: 'root'
})

export class EventResolverGuard implements Resolve <Event> {
  
  constructor(private eventService: EventService){ }
  

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
    if(route.params && route.params['id']){
      return this.eventService.getEventById(route.params['id']);
    }
    return null

  }


  
}
