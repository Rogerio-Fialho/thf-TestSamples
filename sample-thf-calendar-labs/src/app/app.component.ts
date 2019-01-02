import { Component, OnInit } from '@angular/core';

import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-calendar-labs',
  templateUrl: './sample-thf-calendar-labs.component.html'
})
export class SampleThfCalendarLabsComponent implements OnInit {

  calendar;
  event;
  locale: string;
  maxDate: string | Date;
  minDate: string | Date;

  readonly localeOptions: Array<ThfRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'es', value: 'es' },
    { label: 'en', value: 'en' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.calendar = undefined;
    this.event = undefined;
    this.locale = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
  }

}

