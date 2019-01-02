import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfMenuModule } from '@totvs/thf-ui/components/thf-menu';

@NgModule({
  imports: [
    BrowserModule,
    ThfMenuModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }