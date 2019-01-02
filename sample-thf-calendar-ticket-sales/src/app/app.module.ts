import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfCalendarModule } from '@totvs/thf-ui/components/thf-calendar';

@NgModule({
  imports: [
    BrowserModule,
    ThfCalendarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }