import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfHttpRequestInterceptorModule } from '@totvs/thf-ui/components/thf-httprequestinterceptor';

@NgModule({
  imports: [
    BrowserModule,
    ThfHttpRequestInterceptorModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }