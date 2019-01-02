import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfLoadingOverlayModule } from '@totvs/thf-ui/components/thf-loadingoverlay';

@NgModule({
  imports: [
    BrowserModule,
    ThfLoadingOverlayModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }