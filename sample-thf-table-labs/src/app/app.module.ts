import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfTableModule } from '@totvs/thf-ui/components/thf-table';

@NgModule({
  imports: [
    BrowserModule,
    ThfTableModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }