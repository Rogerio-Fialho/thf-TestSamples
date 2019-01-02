import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDecimalModule } from '@totvs/thf-ui/components/thf-decimal';

@NgModule({
  imports: [
    BrowserModule,
    ThfDecimalModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }