import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfToolbarModule } from '@totvs/thf-ui/components/thf-toolbar';

@NgModule({
  imports: [
    BrowserModule,
    ThfToolbarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }