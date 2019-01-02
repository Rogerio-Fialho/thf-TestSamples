import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageDetailModule } from '@totvs/thf-ui/components/thf-pagedetail';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageDetailModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }