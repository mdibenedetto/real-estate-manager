 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { environment } from '../environments/environment';
 import { LocationStrategy, HashLocationStrategy } from '@angular/common';

 import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
 import { PropertyModule } from './property/property.module';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
        { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
        ...provideLocationStrategy
     ],
     bootstrap: [AppComponent]
 })
 export class AppModule {

 }