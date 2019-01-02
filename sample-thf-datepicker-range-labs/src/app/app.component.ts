import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfDatepickerRange, ThfDatepickerRangeLiterals } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-datepicker-range-labs',
  templateUrl: './sample-thf-datepicker-range-labs.component.html'
})
export class SampleThfDatepickerRangeLabsComponent implements OnInit {

  clean: boolean;
  customLiterals: ThfDatepickerRangeLiterals;
  datepickerRange: ThfDatepickerRange;
  endDate: string | Date;
  event: string;
  help: string;
  label: string;
  literals: string;
  properties: Array<string>;
  startDate: string | Date;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  getDatepickerRange() {
    return JSON.stringify(this.datepickerRange);
  }

  restore() {
    this.clean = undefined;
    this.customLiterals = undefined;
    this.endDate = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.properties = [];
    this.startDate = undefined;
    setTimeout(() => this.datepickerRange = undefined);
  }

}

