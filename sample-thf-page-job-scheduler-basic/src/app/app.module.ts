import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfPageJobSchedulerModule } from '@totvs/thf-ui/components/thf-pagejobscheduler';

@NgModule({
  imports: [
    BrowserModule,
    ThfPageJobSchedulerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }