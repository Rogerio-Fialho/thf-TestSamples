import { Injectable } from '@angular/core';

import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Injectable()
export class SampleThfTableLabsService {

  private readonly colors = [
    'color-01', 'color-02', 'color-03', 'color-04', 'color-05', 'color-06',
    'color-07', 'color-08', 'color-09', 'color-10', 'color-11', 'color-12'
  ];

  private readonly status = ['success', 'warning', 'danger'];

  generateNewItem(index: number) {
    return {
      text: `Text ${index}`,
      page: `Link ${index}`,
      link: 'http://www.totvs.com.br',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: `Detail Information 1`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: `Detail Information 2`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomStatus(),
      color: `Text ${index}`,
      icon: this.generateRandomIcon(),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <ThfTableColumn>{ property: 'text', width: '30%' },
      number: <ThfTableColumn>{ property: 'number', type: 'number' },
      date: <ThfTableColumn>{ property: 'date', type: 'date' },
      time: <ThfTableColumn>{ property: 'time', type: 'time' },
      dateTime: <ThfTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <ThfTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <ThfTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <ThfTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <ThfTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <ThfTableColumn> { property: 'subtitle', type: 'subtitle', width: '10%', subtitles: [
        { value: 'color-01', color: 'color-01', label: 'Color 1 - primary', content: '1' },
        { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
        { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
        { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
        { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
        { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
        { value: 'color-07', color: 'color-07', label: 'Color 7 - warning', content: '7' },
        { value: 'color-08', color: 'color-08', label: 'Color 8 - danger', content: '8' },
        { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
        { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
        { value: 'color-11', color: 'color-11', label: 'Color 11 - success', content: '11' },
        { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
      ]},

      label: <ThfTableColumn> { property: 'label', type: 'label', width: '10%', labels: [
        { value: 'success', color: 'success', label: 'Success' },
        { value: 'warning', color: 'warning', label: 'Warning' },
        { value: 'danger', color: 'danger', label: 'Danger' }
      ]},

      color: <ThfTableColumn> { property: 'color',  width: '10%', color: this.changeColor},

      detail: <ThfTableColumn> { property: 'detail', type: 'detail', detail: {
        columns: [
          { property: 'info', label: 'Detail' },
          { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
          { property: 'time', label: 'Detail Time', type: 'time' },
          { property: 'currency', label: 'Detail Currency', type: 'currency' }
        ],
        typeHeader: 'inline'
      }}

    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return  number % 2 === 0 ? 'warning' : 'success';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomStatus() {
    return this.status[Math.floor(Math.random() * this.status.length)];
  }

  private generateRandomIcon() {
    const icons = ['thf-icon-copy', 'thf-icon-ok', 'thf-icon-camera', 'thf-icon-chat', 'thf-icon-company'];

    const randomStart = Math.floor(Math.random() * icons.length);
    const randomEnd = Math.floor(Math.random() * 4);

    return icons.slice(randomStart, randomStart + randomEnd);
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return `${hourValid}:${minutesValid}:${secondsValid}`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);

    return new Date(2018, month, day);
  }

}

