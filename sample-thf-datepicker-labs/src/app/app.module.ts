import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDatepickerModule } from '@totvs/thf-ui/components/thf-datepicker';

@NgModule({
  imports: [
    BrowserModule,
    ThfDatepickerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }