import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageListModule } from '@totvs/thf-ui/components/thf-pagelist';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageListModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }