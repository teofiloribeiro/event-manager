import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from './../../model/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // private auth: FormControl;
  private user: User = new User();
  constructor(private authService: AuthService) {}

  // loginForm = this._fb.group({
  //   email: [''],
  //   password: ['']
  // })

  onSubmit(form) {
    console.log(form);
    this.authService.login(this.user.userName, this.user.password)
    // .subscribe(
    //   data => console.log ('suscess', data),
    //   error => console.log ('error', error)
    // );
  }

}
