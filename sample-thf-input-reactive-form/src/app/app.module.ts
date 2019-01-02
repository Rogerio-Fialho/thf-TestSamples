import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfInputModule } from '@totvs/thf-ui/components/thf-input';

@NgModule({
  imports: [
    BrowserModule,
    ThfInputModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }