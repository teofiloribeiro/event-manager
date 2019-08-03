import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  onSubmit() {
    console.log("submit: " + this.loginForm.value);
    this.authService.login(this.loginForm.value)
    
    // .subscribe(
    //   data => {
    //     console.log ('suscess', data)
        
    //   },
    //   error => console.log ('error', error)
    // );
  }

}
