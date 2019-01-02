import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfCheckboxGroupModule } from '@totvs/thf-ui/components/thf-checkboxgroup';

@NgModule({
  imports: [
    BrowserModule,
    ThfCheckboxGroupModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }