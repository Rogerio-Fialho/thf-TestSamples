import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfTabsModule } from '@totvs/thf-ui/components/thf-tabs';

@NgModule({
  imports: [
    BrowserModule,
    ThfTabsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }