import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { EventPreviewComponent } from './components/event-preview/event-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    EventPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
