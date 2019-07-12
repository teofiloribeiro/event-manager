import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // private auth: FormControl;

  email = '';
  password = '';
  constructor(private authService: AuthService) {}

  // loginForm = this._fb.group({
  //   email: [''],
  //   password: ['']
  // })

  onSubmit() {
    console.log(this.password);
    this.authService.login(this.email, this.password)
    .subscribe(
      data => console.log ('suscess', data),
      error => console.log ('error', error)
    );
  }

}
