import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDropdownModule } from '@totvs/thf-ui/components/thf-dropdown';

@NgModule({
  imports: [
    BrowserModule,
    ThfDropdownModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }