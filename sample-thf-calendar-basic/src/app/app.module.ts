import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ThfCalendarModule } from '@totvs/thf-ui/components/thf-calendar';
import { ThfDateService } from '@totvs/thf-ui/services/thf-date';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ThfCalendarModule
  ],
  providers: [ThfDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
