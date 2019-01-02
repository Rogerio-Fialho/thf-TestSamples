import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageLoginModule } from '@totvs/thf-ui/components/thf-pagelogin';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageLoginModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }