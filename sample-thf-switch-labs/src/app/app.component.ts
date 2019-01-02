import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfRadioGroupOption, ThfSwitchLabelPosition } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-switch-labs',
  templateUrl: './sample-thf-switch-labs.component.html'
})
export class SampleThfSwitchLabsComponent implements OnInit {

  event: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: ThfSwitchLabelPosition;
  properties: Array<string>;
  switch: boolean;

  public readonly labelPositionOptions: Array<ThfRadioGroupOption> = [
    { label: 'Left', value: ThfSwitchLabelPosition.Left },
    { label: 'Right', value: ThfSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.switch = undefined;
  }

}

