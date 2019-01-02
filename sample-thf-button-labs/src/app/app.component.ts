import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';

@Component({
  selector: 'sample-thf-button-labs',
  templateUrl: './sample-thf-button-labs.component.html',
})
export class SampleThfButtonLabsComponent implements OnInit {

  label: string;
  type: string;
  icon: string;
  properties: Array<string>;

  propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'small', label: 'Small' }
  ];

  iconsOptions: Array<ThfRadioGroupOption> = [
    { label: 'thf-icon-totvs', value: 'thf-icon-totvs' },
    { label: 'thf-icon-calendar', value: 'thf-icon-calendar' },
    { label: 'thf-icon-user', value: 'thf-icon-user' },
    { label: 'thf-icon-telephone', value: 'thf-icon-telephone' }
  ];

  typesOptions: Array<ThfRadioGroupOption> = [
    { label: 'default', value: 'default' },
    { label: 'primary', value: 'primary' },
    { label: 'danger', value: 'danger' },
    { label: 'link', value: 'link' }
  ];

  constructor(private thfDialog: ThfDialogService) { }

  ngOnInit() {
    this.restore();
  }

  buttonClick() {
    this.thfDialog.alert({title: 'Totvs Button', message: 'Hello THF World!!!'});
  }

  restore() {
    this.label = undefined;
    this.type = undefined;
    this.icon = undefined;
    this.properties = [];
  }

}

