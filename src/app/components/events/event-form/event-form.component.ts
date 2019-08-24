import { Component, OnInit } from '@angular/core';

import { LocalizationService } from './../../../services/localization.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  eventForm: FormGroup;
  testeDate: Date;
  event: Event = null;
  

  constructor(
      private formBuilder: FormBuilder, 
      private localizationService: LocalizationService,
      private eventService: EventService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit() {
    
    // console.log(event)
    // console.log(event.date)
    
    // this.testeDate = new Date(event.date);
    // console.log(this.testeDate.toUTCString)
    
    if(this.route.snapshot.routeConfig.path == 'edit' ){
      this.route.paramMap
      .pipe(map(()=> window.history.state))
      .subscribe(
        data => this.event = data.event
      )
      if (!this.event){
        this.router.navigate(['events/new'])
      }
    }    

    this.eventForm = this.formBuilder.group({
      _id:[this.event ? this.event._id : null],
      title: [this.event ? this.event.title : null, [Validators.required, Validators.maxLength(64)]],
      description: [this.event ? this.event.description : null, Validators.maxLength(255)],
      date: [this.event ? this.event.date : null, Validators.required],
      location: this.formBuilder.group({
        address: this.formBuilder.group({
          postalCode: [this.event ? this.event.location.address.postalCode: null, Validators.required],
          number: [this.event ? this.event.location.address.number: null, Validators.required],
          street: [this.event ? this.event.location.address.street: null],
          neighborhood: [this.event ? this.event.location.address.city: null],
          city: [this.event ? this.event.location.address.city: null],
          state: [this.event ? this.event.location.address.state: null]
        })  
      })
      
    });

  }



  onSubmit(){
    console.log("submit: "+this.eventForm.value);
    if(this.eventForm.valid){
      this.eventService.saveEvent(this.eventForm.value)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['events/guest'], {state: {event: this.event}})
        }
      );
    }
    else{
     this.checkForm(this.eventForm)
    }
    //this.eventForm.reset();
  }

  checkForm(formGroup: FormGroup){
    Object.keys(formGroup.controls)
    .forEach(field=>{
      const control = formGroup.get(field);
      control.markAsTouched();
      if(control instanceof FormGroup){
        this.checkForm(control);
      }
  })
  }

  consultPostalCode(){
    let postalCode = this.eventForm.get('location.address.postalCode').value;
    this.localizationService.findUsingPostalCode(postalCode)
      .subscribe(data => this.setAddressDataOnForm(data))
    }

    setAddressDataOnForm(data){
      this.eventForm.patchValue({
        location:{
          address:{
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf
          }
        }
       
      })
    }
}
