import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfGridModule } from '@totvs/thf-ui/components/thf-grid';

@NgModule({
  imports: [
    BrowserModule,
    ThfGridModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }