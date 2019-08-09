import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guest } from 'src/app/model/guest';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {

  guestForm: FormGroup;
  guest: Guest;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.guestForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null]
    })

  }

  onSubmit(){
    this.eventService.createGuest(this.guestForm.value,1);
     
  }

}
