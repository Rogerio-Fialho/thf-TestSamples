import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfRadioGroupModule } from '@totvs/thf-ui/components/thf-radiogroup';

@NgModule({
  imports: [
    BrowserModule,
    ThfRadioGroupModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }