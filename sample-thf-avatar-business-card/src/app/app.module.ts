import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfAvatarModule } from '@totvs/thf-ui/components/thf-avatar';

@NgModule({
  imports: [
    BrowserModule,
    ThfAvatarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }