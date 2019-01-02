import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfContainerModule } from '@totvs/thf-ui/components/thf-container';

@NgModule({
  imports: [
    BrowserModule,
    ThfContainerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }