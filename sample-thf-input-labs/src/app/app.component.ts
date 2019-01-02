import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-input-labs',
  templateUrl: './sample-thf-input-labs.component.html'
})
export class SampleThfInputLabsComponent implements OnInit {

  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;

  public readonly iconOptions: Array<ThfSelectOption> = [
    { value: 'thf-icon-totvs', label: 'thf-icon-totvs' },
    { value: 'thf-icon-search', label: 'thf-icon-search' },
    { value: 'thf-icon-world', label: 'thf-icon-world' }
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
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
    this.input = undefined;
  }

}

