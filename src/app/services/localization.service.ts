import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  
  constructor(private http: HttpClient, private handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  isPostalCodeValid(postalCode){
    if(postalCode == null){
      return false;
    }
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
    console.log("validacep")
    if(this.isPostalCodeValid(postalCode)){
      return this.http.get(`//viacep.com.br/ws/${postalCode}/json`);
    }
    return of ({});
  }
}
