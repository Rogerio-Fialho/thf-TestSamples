import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfTextareaModule } from '@totvs/thf-ui/components/thf-textarea';

@NgModule({
  imports: [
    BrowserModule,
    ThfTextareaModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }