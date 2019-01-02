import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageDynamicEditModule } from '@totvs/thf-ui/components/thf-pagedynamicedit';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageDynamicEditModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }