import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-textarea-labs',
  templateUrl: './sample-thf-textarea-labs.component.html'
})
export class SampleThfTextareaLabsComponent implements OnInit {

  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  rows: string;
  textarea: string;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
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
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
  }

}

