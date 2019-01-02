import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfInfoModule } from '@totvs/thf-ui/components/thf-info';

@NgModule({
  imports: [
    BrowserModule,
    ThfInfoModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }