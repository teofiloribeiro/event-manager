import { Component, OnInit } from '@angular/core';

import { LocalizationService } from './../../../services/localization.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  constructor(private localizationService : LocalizationService) { }

  ngOnInit() {
  }

  onSubmit(form){}
  consultPostalCode(postalCode, eventForm){
    console.log(eventForm)
    this.localizationService.findUsingPostalCode(postalCode)
      .subscribe(data => this.setAddressDataOnForm(data, eventForm))
  }
  setAddressDataOnForm(data, form){
    // form.setValue({
    //   title: null,
    //   description: null,
    //   date:null,
    //   address:{
    //     postalCode: null,
    //     number:'02',
    //     street: data.logradouro,
    //     neighborhood: data.bairro,
    //     city: data.localidade,
    //     state: data.uf
    //   }
    // });

    form.form.patchValue({
      address:{
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf
      }
    })


   }

}
