import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfComboModule } from '@totvs/thf-ui/components/thf-combo';

@NgModule({
  imports: [
    BrowserModule,
    ThfComboModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }