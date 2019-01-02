import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDynamicFormModule } from '@totvs/thf-ui/components/thf-dynamicform';

@NgModule({
  imports: [
    BrowserModule,
    ThfDynamicFormModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }