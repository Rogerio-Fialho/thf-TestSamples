import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfLookupColumn, ThfLookupLiterals } from '@totvs/thf-ui/components/thf-field';

import { SampleThfLookupService } from '../sample-thf-lookup.service';

@Component({
  selector: 'sample-thf-lookup-labs',
  templateUrl: './sample-thf-lookup-labs.component.html',
  providers: [ SampleThfLookupService ]
})
export class SampleThfLookupLabsComponent implements OnInit {

  columns: Array<ThfLookupColumn>;
  columnsName: Array<string>;
  customLiterals: ThfLookupLiterals;
  event: string;
  fieldFormat: (objectSelected) => string;
  fieldLabel: string;
  fieldValue: string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;

  private readonly columnsDefinition = {
    value: <ThfLookupColumn>{ column: 'value', label: 'Id' },
    label: <ThfLookupColumn>{ column: 'label', label: 'Name' },
    nickname: <ThfLookupColumn>{ column: 'nickname', label: 'Stage Name' },
    email: <ThfLookupColumn>{ column: 'email', label: 'Email' }
  };

  public readonly columnsOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'value', label: 'Id' },
    { value: 'label', label: 'Name' },
    { value: 'nickname', label: 'Stage Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'required', label: 'Required' },
    { value: 'fieldFormat', label: 'Field Format'}
  ];

  constructor(public filterService: SampleThfLookupService) { }

  ngOnInit(): void {
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

  fieldFormatFn(objectSelected) {
    return `${objectSelected.label} - ${objectSelected.nickname}`;
  }

  onChangeProperties(properties: Array<string>) {
    if (properties.includes('fieldFormat')) {
      this.fieldFormat = this.fieldFormatFn;
    } else {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.columnsName = ['value', 'label'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'label';
    this.fieldValue = 'value';

    this.event = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }

}

