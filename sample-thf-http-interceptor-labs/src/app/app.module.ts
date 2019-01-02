import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfHttpInterceptorModule } from '@totvs/thf-ui/components/thf-httpinterceptor';

@NgModule({
  imports: [
    BrowserModule,
    ThfHttpInterceptorModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }