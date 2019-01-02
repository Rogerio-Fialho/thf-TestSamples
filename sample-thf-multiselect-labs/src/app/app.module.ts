import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfMultiselectModule } from '@totvs/thf-ui/components/thf-multiselect';

@NgModule({
  imports: [
    BrowserModule,
    ThfMultiselectModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }