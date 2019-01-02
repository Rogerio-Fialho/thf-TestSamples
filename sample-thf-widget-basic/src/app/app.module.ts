import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfWidgetModule } from '@totvs/thf-ui/components/thf-widget';

@NgModule({
  imports: [
    BrowserModule,
    ThfWidgetModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }