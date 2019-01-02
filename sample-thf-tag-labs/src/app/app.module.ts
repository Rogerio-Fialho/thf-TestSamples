import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfTagModule } from '@totvs/thf-ui/components/thf-tag';

@NgModule({
  imports: [
    BrowserModule,
    ThfTagModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }