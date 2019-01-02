import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-radio-group-labs',
  templateUrl: './sample-thf-radio-group-labs.component.html'
})
export class SampleThfRadioGroupLabsComponent implements OnInit {

  columns: number;
  event: string;
  help: string;
  label: string;
  option: ThfRadioGroupOption;
  options: Array<ThfRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;

  readonly columnOptions: Array<ThfRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'required', label: 'Required' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];

    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): ThfRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }

}

