import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-code-editor-labs',
  templateUrl: './sample-thf-code-editor-labs.component.html'
})
export class SampleThfCodeEditorLabsComponent implements OnInit {

  codeEditor: string;
  language: string;
  properties: Array<string>;
  theme: string;

  public readonly languageOptions: Array<ThfSelectOption> = [
    { label: 'java', value: 'java'},
    { label: 'yaml', value: 'yaml'},
    { label: 'typescript', value: 'typescript'},
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'readonly', label: 'Read Only' }
  ];

  public readonly themeOptions: Array<ThfSelectOption> = [
    { label: 'vs', value: 'vs'},
    { label: 'vs-dark', value: 'vs-dark'},
    { label: 'hc-black', value: 'hc-black'}
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.language = '';
    this.theme = '';
    this.properties = [];
    this.codeEditor = '';
  }

}

