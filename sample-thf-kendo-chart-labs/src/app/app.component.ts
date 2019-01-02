import { Component, OnInit } from '@angular/core';

import { ThfBulletChartSeries, ThfCandlestickChartSeries, ThfColumnChartSeries,
  ThfPieChartSeries } from '@totvs/thf-kendo/components/thf-chart';
import { ThfSelectOption, ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-kendo-chart-labs',
  templateUrl: './sample-thf-kendo-chart-labs.component.html'
})
export class SampleThfKendoChartLabsComponent implements OnInit {

  categories: Array<string>;
  category: string;
  event: string;
  height: number;
  maxValue: number;
  minValue: number;
  properties: Array<string>;
  series: Array<any>;
  title: string;
  type: string;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'labelVisible', label: 'Label Visible' }
  ];

  public readonly typeOptions: Array<ThfSelectOption> = [
    { value: 'area', label: 'Area' },
    { value: 'bar', label: 'Bar' },
    { value: 'bullet', label: 'Bullet' },
    { value: 'candlestick', label: 'Candlestick' },
    { value: 'column', label: 'Column' },
    { value: 'donut', label: 'Donut' },
    { value: 'funnel', label: 'Funnel' },
    { value: 'line', label: 'Line' },
    { value: 'ohlc', label: 'Ohlc' },
    { value: 'pie', label: 'Pie' },
    { value: 'rangeBar', label: 'Range Bar' },
    { value: 'scatter', label: 'Scatter' },
    { value: 'waterfall', label: 'Waterfall' }
  ];

  private bulletSeries: Array<ThfBulletChartSeries>;
  private candlestickSeries: Array<ThfCandlestickChartSeries>;
  private columnSeries: Array<ThfColumnChartSeries>;
  private pieSeries: Array<ThfPieChartSeries>;

  ngOnInit() {
    this.restore();
  }

  addData() {
    const dataName = `Data ${this.series.length + 1}`;
    const numbers = [
      this.generateRandomNumber(),
      this.generateRandomNumber(),
      this.generateRandomNumber(),
      this.generateRandomNumber()
    ];

    this.bulletSeries.push({ name: dataName, data: [
      [numbers[0], numbers[1]],
      [numbers[2], numbers[3]],
      [numbers[0], numbers[2]],
      [numbers[1], numbers[3]]
    ]});

    this.candlestickSeries.push({ name: dataName, data: [numbers] });

    this.columnSeries.push({ name: dataName, data: numbers });

    this.pieSeries[0].data.push( { category: dataName, value: numbers[0]});

    if (!this.type) {
      this.series = this.columnSeries;
    }

    this.category = '';
  }

  changeEvent(event: string): void {
    this.event = event;
  }

  changeTypeOptions(type: string): void {
    const defaultCategories = [ `${this.category} 1`, `${this.category} 2`, `${this.category} 3`, `${this.category} 4`];

    switch (type) {
      case 'donut':
      case 'funnel':
      case 'pie':
        this.series = this.pieSeries;
        this.categories = defaultCategories;
        break;
      case 'bullet':
      case 'rangeBar':
      case 'scatter':
        this.series = this.bulletSeries;
        this.categories = [];
        break;
      case 'candlestick':
      case 'ohlc':
        this.series = this.candlestickSeries;
        this.categories = [];
        break;
      default:
        this.series = this.columnSeries;
        this.categories = defaultCategories;
    }
  }

  restore() {
    this.categories = [];
    this.category = '';

    this.event = '';
    this.height = 0;
    this.maxValue = 0;
    this.minValue = 0;
    this.properties = [];
    this.series = [];
    this.title = '';
    this.type = undefined;

    this.bulletSeries = [];
    this.candlestickSeries = [];
    this.columnSeries = [];
    this.pieSeries = [{ data: [] }];
  }

  private generateRandomNumber() {
    return parseFloat((Math.random() * (this.maxValue || 1)).toFixed(2));
  }

}

