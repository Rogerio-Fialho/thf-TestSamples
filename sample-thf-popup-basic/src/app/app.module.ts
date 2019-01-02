import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPopupModule } from '@totvs/thf-ui/components/thf-popup';

@NgModule({
  imports: [
    BrowserModule,
    ThfPopupModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }