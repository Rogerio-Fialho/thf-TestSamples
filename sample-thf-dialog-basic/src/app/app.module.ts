import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDialogModule } from '@totvs/thf-ui/components/thf-dialog';

@NgModule({
  imports: [
    BrowserModule,
    ThfDialogModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }