import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() events$: Observable<Event []>;
  
  constructor(private eventService: EventService) { }

  ngOnInit() {
    console.log("CHAMOU")
    this.events$ = this.eventService.getEvents();
  }
}
