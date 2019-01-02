import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageEditModule } from '@totvs/thf-ui/components/thf-pageedit';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageEditModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }