import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfLookupModule } from '@totvs/thf-ui/components/thf-lookup';

@NgModule({
  imports: [
    BrowserModule,
    ThfLookupModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }