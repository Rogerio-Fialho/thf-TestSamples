import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfDynamicViewModule } from '@totvs/thf-ui/components/thf-dynamicview';

@NgModule({
  imports: [
    BrowserModule,
    ThfDynamicViewModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }