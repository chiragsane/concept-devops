import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import 'hammerjs';

import { AppGuard } from './app.guard';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent, HomeDailogComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeDailogComponent
  ],
  entryComponents: [
    HomeDailogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    AppService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
