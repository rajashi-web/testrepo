import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PrimeComponent } from './prime/prime.component';

import { PageComponent } from './page/page.component';
import { ArrayprogComponent } from './arrayprog/arrayprog.component';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { ThankyouPageComponent } from './thankyou-page/thankyou-page.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';



@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrimeComponent,

    PageComponent,
    ArrayprogComponent,
    UserlistComponent,
    ThankyouPageComponent,
    UpdateuserComponent,
    CreatestudentComponent,
    ViewstudentComponent,
    UpdatestudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
