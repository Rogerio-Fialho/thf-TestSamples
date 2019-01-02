import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfUrlModule } from '@totvs/thf-ui/components/thf-url';

@NgModule({
  imports: [
    BrowserModule,
    ThfUrlModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }