import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfNumberModule } from '@totvs/thf-ui/components/thf-number';

@NgModule({
  imports: [
    BrowserModule,
    ThfNumberModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }