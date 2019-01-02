
import { NgModule } from '@angular/core';

import { KendoSharedModule } from './../../../shared/kendo-shared.module';

import { DocThfKendoGridComponent } from './doc-thf-kendo-grid.component';
import { DocThfKendoGridRoutingModule } from './doc-thf-kendo-grid-routing.module';

import { SampleThfKendoGridDocComponent } from './doc/sample-thf-kendo-grid-doc.component';

  import { SampleThfKendoGridComponent } from './samples/sample-thf-kendo-grid.component';

import { SampleThfKendoGridViewComponent } from './samples/sample-thf-kendo-grid-view.component';

@NgModule({
  imports: [
    KendoSharedModule,

    DocThfKendoGridRoutingModule
  ],
  declarations: [
    SampleThfKendoGridComponent,
    SampleThfKendoGridViewComponent,
    DocThfKendoGridComponent,
    SampleThfKendoGridDocComponent
  ],
  providers: []
})
export class DocThfKendoGridModule { }
