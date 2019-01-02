import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-datepicker-labs',
  templateUrl: './sample-thf-datepicker-labs.component.html'
})
export class SampleThfDatepickerLabsComponent implements OnInit {

  datepicker: string | Date;
  end: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  start: string | Date;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' }
  ];

  public readonly formatOptions: Array<ThfRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<ThfRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.datepicker = undefined;
    this.end = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.start = undefined;
  }

}

