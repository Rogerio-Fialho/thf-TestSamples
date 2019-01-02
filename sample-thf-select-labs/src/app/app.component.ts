import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-select-labs',
  templateUrl: './sample-thf-select-labs.component.html'
})
export class SampleThfSelectLabsComponent implements OnInit {

  event: string;
  help: string;
  label: string;
  option: ThfSelectOption;
  options: Array<ThfSelectOption>;
  placeholder: string;
  properties: Array<string>;
  select: string;

  readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'required', label: 'Required' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.placeholder = '';
    this.properties = [];
    this.select = '';
  }

}

