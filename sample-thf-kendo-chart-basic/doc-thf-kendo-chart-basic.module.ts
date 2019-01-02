
import { NgModule } from '@angular/core';

import { KendoSharedModule } from './../../../shared/kendo-shared.module';

import { DocThfKendoChartComponent } from './doc-thf-kendo-chart-basic.component';
import { DocThfKendoChartRoutingModule } from './doc-thf-kendo-chart-basic-routing.module';

import { SampleThfKendoChartDocComponent } from './doc/sample-thf-kendo-chart-basic-doc.component';

  import { SampleThfKendoChartBasicComponent } from './samples/sample-thf-kendo-chart-basic.component';

import { SampleThfKendoChartBasicViewComponent } from './samples/sample-thf-kendo-chart-basic-view.component';

@NgModule({
  imports: [
    KendoSharedModule,

    DocThfKendoChartRoutingModule
  ],
  declarations: [
    SampleThfKendoChartBasicComponent,
    SampleThfKendoChartBasicViewComponent,
    DocThfKendoChartComponent,
    SampleThfKendoChartDocComponent
  ],
  providers: []
})
export class DocThfKendoChartModule { }
