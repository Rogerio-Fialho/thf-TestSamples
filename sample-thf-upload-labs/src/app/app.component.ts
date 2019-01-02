import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfUploadFileRestrictions, ThfUploadLiterals } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-upload-labs',
  templateUrl: './sample-thf-upload-labs.component.html'
})
export class SampleThfUploadLabsComponent implements OnInit {

  allowedExtensions: string;
  customLiterals: ThfUploadLiterals;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: ThfUploadFileRestrictions;
  upload: Array<any>;
  url: string;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'required', label: 'Required' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'autoupload', label: 'Automatic upload' }
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

  onChangeExtension() {
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions: this.allowedExtensions.split(',') });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://thf.totvs.com.br/sample/api/uploads/addFile';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }

}

