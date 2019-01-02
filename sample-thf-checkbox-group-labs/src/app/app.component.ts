import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-checkbox-group-labs',
  templateUrl: './sample-thf-checkbox-group-labs.component.html'
})
export class SampleThfCheckboxGroupLabsComponent implements OnInit {

  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: ThfCheckboxGroupOption;
  options: Array<ThfCheckboxGroupOption>;
  properties: Array<string>;

  public readonly columnOptions: Array<ThfRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate'},
    { value: 'required', label: 'Required' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }

}

