import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDisclaimerGroupModule } from '@totvs/thf-ui/components/thf-disclaimergroup';

@NgModule({
  imports: [
    BrowserModule,
    ThfDisclaimerGroupModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }