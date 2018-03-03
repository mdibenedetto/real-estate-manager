 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { environment } from '../environments/environment';
 import { LocationStrategy, HashLocationStrategy } from '@angular/common';

 import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
 import { PropertyModule } from './property/property.module';

 let provideLocationStrategy = [{ provide: LocationStrategy, useClass: HashLocationStrategy }];
 if (!environment['useHash']) {
     console.log('Use hash strategy!')
     provideLocationStrategy =[];
 }

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
     providers: [
        ...provideLocationStrategy
     ],
     bootstrap: [AppComponent]
 })
 export class AppModule {

 }