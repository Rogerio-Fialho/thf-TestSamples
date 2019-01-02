import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDatepickerRangeModule } from '@totvs/thf-ui/components/thf-datepickerrange';

@NgModule({
  imports: [
    BrowserModule,
    ThfDatepickerRangeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }