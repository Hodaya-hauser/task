
import {   ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
  
    AppComponent
    
    
  ], 
  imports: [ BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,FormsModule,   
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

 