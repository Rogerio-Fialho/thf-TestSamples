import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfListViewModule } from '@totvs/thf-ui/components/thf-listview';

@NgModule({
  imports: [
    BrowserModule,
    ThfListViewModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }