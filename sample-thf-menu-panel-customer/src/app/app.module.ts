import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfMenuPanelModule } from '@totvs/thf-ui/components/thf-menupanel';

@NgModule({
  imports: [
    BrowserModule,
    ThfMenuPanelModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }