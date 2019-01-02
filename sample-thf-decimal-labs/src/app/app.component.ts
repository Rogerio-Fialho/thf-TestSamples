import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-decimal-labs',
  templateUrl: './sample-thf-decimal-labs.component.html'
})
export class SampleThfDecimalLabsComponent implements OnInit {

  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;

  public readonly iconOptions: Array<ThfSelectOption> = [
    { value: 'thf-icon-cart', label: 'thf-icon-cart' },
    { value: 'thf-icon-finance-secure', label: 'thf-icon-finance-secure' },
    { value: 'thf-icon-debit-payment', label: 'thf-icon-debit-payment' }
  ];

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

  restore() {
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;

    this.properties = [];
  }

}

