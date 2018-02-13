 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
 import { PropertyModule } from './property/property.module';

 @NgModule({
     declarations: [
         AppComponent
     ],
     imports: [
         BrowserModule,
         FormsModule,
         PropertyModule,
         AppRoutingModule
     ],
     providers: [],
     bootstrap: [AppComponent]
 })
 export class AppModule {

 }