import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThfBreadcrumbModule } from '@totvs/thf-ui/components/thf-breadcrumb';

@NgModule({
  imports: [
    BrowserModule,
    ThfBreadcrumbModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }