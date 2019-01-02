import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfNotificationModule } from '@totvs/thf-ui/components/thf-notification';

@NgModule({
  imports: [
    BrowserModule,
    ThfNotificationModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }