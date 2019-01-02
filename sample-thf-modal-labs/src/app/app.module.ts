import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfModalModule } from '@totvs/thf-ui/components/thf-modal';

@NgModule({
  imports: [
    BrowserModule,
    ThfModalModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }