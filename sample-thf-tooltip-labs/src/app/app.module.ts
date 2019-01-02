import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfTooltipModule } from '@totvs/thf-ui/components/thf-tooltip';

@NgModule({
  imports: [
    BrowserModule,
    ThfTooltipModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }