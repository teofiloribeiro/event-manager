import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/model/event';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss']
})
export class EventPreviewComponent implements OnInit {

  // constructor(private eventDate: string, private daysLeft: string, 
  // private guestsLength: string, private guestsConfimerd: string,
  // private guestsConfimed: string) { }

  private titlelength: number = 15;
  @Input() event: Event;
  eventTitle: string = '';
  eventDate: Date;
  totalGuests: number = 0;
  confirmedGuests: number = 0;
  city: string = '';
  daysLeft: number = 0;
  tip: string = '';

  constructor(
    private router: Router, 
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    this.eventTitle = this.event.title;
    this.eventDate = new Date(this.event.date);
    this.city = this.event.location.address.city;

    this.daysLeft = Math.abs(new Date().getTime() - this.eventDate.getTime());
    this.daysLeft = Math.ceil(this.daysLeft / (1000 * 60 * 60 * 24));

    if (this.eventTitle.length > this.titlelength) {
      this.tip = this.eventTitle;
      this.eventTitle = this.eventTitle.substring(0, this.titlelength).trim() + '...';

    }
  }

  onEdit(){    
    this.router.navigate(['edit'], {relativeTo: this.route, state: { event: this.event }});
  }
  
  onInvite(){
    this.router.navigate(['guest'], {relativeTo: this.route, state: { event: this.event }});
  }

}
