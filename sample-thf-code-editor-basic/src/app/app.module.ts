import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfCodeEditorModule } from '@totvs/thf-ui/components/thf-codeeditor';

@NgModule({
  imports: [
    BrowserModule,
    ThfCodeEditorModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }