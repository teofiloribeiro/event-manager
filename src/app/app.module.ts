import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TokenInteceptorService } from './interceptor/token-inteceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInteceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
