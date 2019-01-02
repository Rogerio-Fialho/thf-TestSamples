import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageDefaultModule } from '@totvs/thf-ui/components/thf-pagedefault';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageDefaultModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }