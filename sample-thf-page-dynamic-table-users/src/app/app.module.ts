import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageDynamicTableModule } from '@totvs/thf-ui/components/thf-pagedynamictable';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageDynamicTableModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }