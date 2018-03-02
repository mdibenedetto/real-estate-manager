 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { AppComponent } from './app.component';

 import { AppRoutingModule } from './app-routing.module';
 import { PropertyModule } from './property/property.module';
 import { HashLocationStrategyModule } from './hash-location-strategy.module';
 import { environment } from '../environments/environment';


let hashModule = [];
 if (environment['useHash']) {
     hashModule.push(HashLocationStrategyModule);
 }

 @NgModule({
     declarations: [
         AppComponent
     ],
     imports: [
         BrowserModule,
         FormsModule,
         PropertyModule,
         AppRoutingModule,
         ...hashModule
     ],
     providers: [

     ],
     bootstrap: [AppComponent]
 })
 export class AppModule {

 }