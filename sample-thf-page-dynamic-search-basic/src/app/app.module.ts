import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageDynamicSearchModule } from '@totvs/thf-ui/components/thf-pagedynamicsearch';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageDynamicSearchModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }