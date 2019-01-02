import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPasswordModule } from '@totvs/thf-ui/components/thf-password';

@NgModule({
  imports: [
    BrowserModule,
    ThfPasswordModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }