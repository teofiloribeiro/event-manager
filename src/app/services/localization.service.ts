import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  
  constructor(private http: HttpClient) { }

  postalCodeValidation(postalCode){
    postalCode = postalCode.replace(/\D/g,'');
    if(postalCode != ""){
      var postalCodeConfig = /^[0-9]{8}$/;
      if(postalCodeConfig.test(postalCode)){
        return true;
      }
    }
    return false;
  }

  findUsingPostalCode(postalCode){
    return this.http.get(`//viacep.com.br/ws/${postalCode}/json`)
    .pipe(map(data => data));
      
  }
}
