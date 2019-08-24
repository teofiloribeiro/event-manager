import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guest } from 'src/app/model/guest';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Event } from 'src/app/model/event';


@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {

  guestForm: FormGroup;
  guest: Guest;
  event: Event;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
   
    this.route.paramMap
    .pipe(map(()=> window.history.state))
    .subscribe(
      data => this.event = data.event
    )
    if (!this.event){
      this.router.navigate(['events'])
    }
    


    this.guestForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null]
    })

  }

  onSubmit(){
    this.eventService.createGuest(this.event, this.guestForm.value)
    .subscribe();
     
  }

}
