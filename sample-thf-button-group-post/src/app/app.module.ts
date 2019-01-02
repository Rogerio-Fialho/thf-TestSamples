import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfButtonGroupModule } from '@totvs/thf-ui/components/thf-buttongroup';

@NgModule({
  imports: [
    BrowserModule,
    ThfButtonGroupModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }