import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// common
import { DevHeaderComponent } from './common/components/dev-header.component'
import { MockDataService } from './common/mock-services/mock-data-service';
import { BaseUrlInterceptor } from './common/interceptors/base-url.interceptor';
// modules
import { AppRoutingModule } from './modules/app-routing.module';
import { PropertyModule } from './modules/property/property.module';
// local
import { AppComponent } from './app.component';

let provideLocationStrategy = [{
  provide: LocationStrategy, useClass: HashLocationStrategy
}];
if (!environment.useHash) {
  console.log('Use hash strategy!')
  provideLocationStrategy = [];
}
console.log(`it is running in environment "${environment.envName}"`)

@NgModule({
  declarations: [
    AppComponent,
    DevHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PropertyModule,
    AppRoutingModule,
    environment.production ? [] :
      HttpClientInMemoryWebApiModule.forRoot(MockDataService),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    ...provideLocationStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
