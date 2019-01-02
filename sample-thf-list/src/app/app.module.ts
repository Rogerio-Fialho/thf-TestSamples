import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfListModule } from '@totvs/thf-ui/components/thf-list';

@NgModule({
  imports: [
    BrowserModule,
    ThfListModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }