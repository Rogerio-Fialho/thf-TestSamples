
import { NgModule } from '@angular/core';

import { KendoSharedModule } from './../../../shared/kendo-shared.module';

import { DocThfKendoChartComponent } from './doc-thf-kendo-chart-sales-statistics.component';
import { DocThfKendoChartRoutingModule } from './doc-thf-kendo-chart-sales-statistics-routing.module';

import { SampleThfKendoChartDocComponent } from './doc/sample-thf-kendo-chart-sales-statistics-doc.component';

  import { SampleThfKendoChartBasicComponent } from './samples/sample-thf-kendo-chart-basic.component';

import { SampleThfKendoChartBasicViewComponent } from './samples/sample-thf-kendo-chart-basic-view.component';
  import { SampleThfKendoChartLabsComponent } from './samples/sample-thf-kendo-chart-labs.component';

import { SampleThfKendoChartLabsViewComponent } from './samples/sample-thf-kendo-chart-labs-view.component';
  import { SampleThfKendoChartSalesStatisticsComponent } from './samples/sample-thf-kendo-chart-sales-statistics.component';

import { SampleThfKendoChartSalesStatisticsViewComponent } from './samples/sample-thf-kendo-chart-sales-statistics-view.component';

@NgModule({
  imports: [
    KendoSharedModule,

    DocThfKendoChartRoutingModule
  ],
  declarations: [
    SampleThfKendoChartBasicComponent,
    SampleThfKendoChartBasicViewComponent,
    SampleThfKendoChartLabsComponent,
    SampleThfKendoChartLabsViewComponent,
    SampleThfKendoChartSalesStatisticsComponent,
    SampleThfKendoChartSalesStatisticsViewComponent,
    DocThfKendoChartComponent,
    SampleThfKendoChartDocComponent
  ],
  providers: []
})
export class DocThfKendoChartModule { }
