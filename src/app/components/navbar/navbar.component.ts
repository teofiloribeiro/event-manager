import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavbar: boolean = false;
 
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.showNavBarEmitter.subscribe(
      show => this.showNavbar = show
    );
  }

}
