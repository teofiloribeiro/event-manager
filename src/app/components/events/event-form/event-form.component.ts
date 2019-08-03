import { Component, OnInit } from '@angular/core';

import { LocalizationService } from './../../../services/localization.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder, 
      private localizationService: LocalizationService,
      private eventService: EventService
    ) { }

  ngOnInit() {

    this.eventForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(64)]],
      description: [null, Validators.maxLength(255)],
      date: [null, Validators.required],
      location: this.formBuilder.group({
        address: this.formBuilder.group({
          postalCode: [null, Validators.required],
          number: [null, Validators.required],
          street: [null],
          neighborhood: [null],
          city: [null],
          state: [null]
        })  
      })
      
    });

  }



  onSubmit(){
    console.log(this.eventForm);
    if(this.eventForm.valid){
      this.eventService.createEvent(this.eventForm.value)
      .subscribe(
        res => console.log(res)
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




  // onSubmit(form){}
  // consultPostalCode(postalCode, eventForm){
  //   console.log(eventForm)
  //   this.localizationService.findUsingPostalCode(postalCode)
  //     .subscribe(data => this.setAddressDataOnForm(data, eventForm))
  // }
  // setAddressDataOnForm(data, form){
  //   form.form.patchValue({
  //     address:{
  //       street: data.logradouro,
  //       neighborhood: data.bairro,
  //       city: data.localidade,
  //       state: data.uf
  //     }
  //   })
  //  }

}
