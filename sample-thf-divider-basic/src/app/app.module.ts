import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDividerModule } from '@totvs/thf-ui/components/thf-divider';

@NgModule({
  imports: [
    BrowserModule,
    ThfDividerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }