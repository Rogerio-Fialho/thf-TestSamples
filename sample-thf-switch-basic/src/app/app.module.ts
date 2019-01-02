import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfSwitchModule } from '@totvs/thf-ui/components/thf-switch';

@NgModule({
  imports: [
    BrowserModule,
    ThfSwitchModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }