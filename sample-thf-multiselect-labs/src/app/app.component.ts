import { Component, OnInit } from '@angular/core';

import {
  ThfCheckboxGroupOption, ThfMultiselectLiterals, ThfMultiselectOption, ThfRadioGroupOption
} from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-multiselect-labs',
  templateUrl: './sample-thf-multiselect-labs.component.html'
})
export class SampleThfMultiselectLabsComponent implements OnInit {

  customLiterals: ThfMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: ThfMultiselectOption;
  options: Array<ThfMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;

  public readonly filterModeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'sort', label: 'Sort'}
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = {label: undefined, value: undefined};
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

  restore() {
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];

    this.option = {label: undefined, value: undefined};
    this.options = [];

    this.event = '';
    this.multiselect = [];
  }

}

