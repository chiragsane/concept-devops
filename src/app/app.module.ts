import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import 'hammerjs';

import { AppGuard } from './app.guard';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    AppService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
