import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ThfAvatarModule } from '@totvs/thf-ui/components/thf-avatar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ThfAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
