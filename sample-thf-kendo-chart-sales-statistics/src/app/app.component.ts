import { Component, OnInit, ViewChild } from '@angular/core';

import { ThfColumnChartSeries } from '@totvs/thf-kendo/components/thf-chart';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-kendo-chart-sales-statistics',
  templateUrl: './sample-thf-kendo-chart-sales-statistics.component.html'
})
export class SampleThfKendoChartSalesStatisticsComponent implements OnInit {

  categories: Array<string>;
  category: string;
  period: string;
  serie: string;
  series: Array<ThfColumnChartSeries>;
  type: string;
  value: number;

  public readonly periodOptions: Array<ThfRadioGroupOption> = [
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' }
  ];

  public readonly typeOptions: Array<ThfRadioGroupOption> = [
    { value: 'area', label: 'Area' },
    { value: 'bar', label: 'Bar' },
    { value: 'column', label: 'Column' },
    { value: 'line', label: 'Line' },
  ];

  @ViewChild('chartFormData') chartFormModal: ThfModalComponent;

  ngOnInit() {
    this.categories = this.getCategoriesMonth();
    this.series = this.getSeriesMonth();
    this.type = 'area';
    this.period = 'month';
  }

  changeEvent(event): void {
    this.category = event.category;
    this.serie = event.series.name;
    this.value = event.dataItem;

    this.chartFormModal.open();
  }

  getSeries(value) {
    if (value === 'month') {
      this.categories = this.getCategoriesMonth();
      this.series = this.getSeriesMonth();
    } else {
      this.categories = this.getCategoriesYears();
      this.series = this.getSeriesYears();
    }
  }

  private getCategoriesMonth(): Array<string> {
    return [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }

  private getCategoriesYears(): Array<string> {
    return [ '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  }

  private getSeriesMonth(): Array<ThfColumnChartSeries> {
    return [
      { name: 'Video Game', data: [100, 232, 300, 250, 480, 600, 413, 510, 700, 860, 750, 890 ] },
      { name: 'Notebook', data: [16, 19, 25, 35, 27, 22, 29, 30, 42, 55, 60, 53] },
      { name: 'Cellphone', data: [35, 72, 120, 150, 110, 122, 135, 200, 220, 210, 210, 210] },
      { name: 'Tablet', data: [100, 130, 135, 150, 170, 165, 180, 200, 220, 150, 135, 100] }
    ];
  }

  private getSeriesYears(): Array<ThfColumnChartSeries> {
    return [
      { name: 'Video Game', data: [140, 164, 174, 185, 197, 220, 180, 172] },
      { name: 'Notebook', data: [16, 19, 25, 35, 27, 22, 29, 30] },
      { name: 'Cellphone', data: [35, 72, 120, 150, 110, 122, 135, 200] },
      { name: 'Tablet', data: [100, 130, 135, 150, 170, 165, 180, 200] }
    ];
  }

}

