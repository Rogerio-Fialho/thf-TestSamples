import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfPageLogin, ThfPageLoginCustomField, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';

@Component({
  selector: 'sample-thf-page-login-labs',
  templateUrl: './sample-thf-page-login-labs.component.html',
})
export class SampleThfPageLoginLabsComponent implements OnInit {

  background: string;
  customField: ThfPageLoginCustomField;
  customFieldOption: any;
  customFieldOptions: Array<ThfSelectOption>;
  customLiterals: ThfPageLoginLiterals;
  literals: string;
  login: string;
  loginPattern: string;
  passwordPattern: string;
  properties: Array<string>;
  recoverUrl: string;
  registerUrl: string;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'hideRememberUser', label: 'Hide remember user' },
    { value: 'loading', label: 'Loading' }
  ];

  constructor(private thfDialog: ThfDialogService) { }

  ngOnInit() {
    this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({label: this.customFieldOption.label, value: this.customFieldOption.value});
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  loginSubmit(formData: ThfPageLogin) {
    this.thfDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData)
    });
  }

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];

    this.background = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.literals = '';
    this.login = '';
    this.loginPattern = '';
    this.passwordPattern = '';
    this.recoverUrl = '';
    this.registerUrl = '';
  }

}

