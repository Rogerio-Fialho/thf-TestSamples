import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfStepperModule } from '@totvs/thf-ui/components/thf-stepper';

@NgModule({
  imports: [
    BrowserModule,
    ThfStepperModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }