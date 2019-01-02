import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfComboOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-combo-labs',
  templateUrl: './sample-thf-combo-labs.component.html'
})
export class SampleThfComboLabsComponent implements OnInit {

  combo: string;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  label: string;
  placeholder: string;
  properties: Array<string>;

  option: ThfComboOption;
  options: Array<ThfComboOption>;

  public readonly filterModeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'sort', label: 'Sort' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, Object.assign({}, this.option)];
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.combo = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;

    this.option = {label: undefined, value: undefined};
    this.options = [];
    this.placeholder = '';
    this.properties = [];
  }

}

