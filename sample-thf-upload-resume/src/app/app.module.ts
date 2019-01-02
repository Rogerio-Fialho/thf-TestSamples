import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfUploadModule } from '@totvs/thf-ui/components/thf-upload';

@NgModule({
  imports: [
    BrowserModule,
    ThfUploadModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }