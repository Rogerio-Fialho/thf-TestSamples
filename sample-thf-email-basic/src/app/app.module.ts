import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfEmailModule } from '@totvs/thf-ui/components/thf-email';

@NgModule({
  imports: [
    BrowserModule,
    ThfEmailModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }