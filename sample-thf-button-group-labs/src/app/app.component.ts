import { Component, OnInit } from '@angular/core';

import { ThfButtonGroupItem, ThfButtonGroupToggle } from '@totvs/thf-ui/components/thf-button-group';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfRadioGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-button-group-labs',
  templateUrl: './sample-thf-button-group-labs.component.html'
})
export class SampleThfButtonGroupLabsComponent implements OnInit {

  button: any;
  buttons: Array<ThfButtonGroupItem>;
  small: boolean;
  toggle: ThfButtonGroupToggle;

  iconsOptions: Array<ThfRadioGroupOption> = [
    { label: 'thf-icon-totvs', value: 'thf-icon-totvs' },
    { label: 'thf-icon-calendar', value: 'thf-icon-calendar' },
    { label: 'thf-icon-user', value: 'thf-icon-user' },
    { label: 'thf-icon-telephone', value: 'thf-icon-telephone' }
  ];

  readonly toggleOptions: Array<ThfSelectOption> = [
    {label: 'none', value: ThfButtonGroupToggle.None },
    {label: 'single', value: ThfButtonGroupToggle.Single },
    {label: 'multiple', value: ThfButtonGroupToggle.Multiple }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  action(button) {
    this.thfNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled
    });

    this.button = {};
  }

  restore() {
    this.button = {};
    this.buttons = [];
  }

}

