import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfDropdownAction } from '@totvs/thf-ui/components/thf-dropdown';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-dropdown-labs',
  templateUrl: './sample-thf-dropdown-labs.component.html'
})
export class SampleThfDropdownLabsComponent implements OnInit {

  action: ThfDropdownAction;
  actions: Array<ThfDropdownAction>;
  label: string;
  properties: Array<string>;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  addAction() {
    this.action.action = this.action.action ? this.showAction.bind(this, this.action.action) : undefined;
    this.actions.push(this.action);

    this.action = { label: undefined };
  }

  restore() {
    this.action = { label: undefined };
    this.actions = [];
    this.label = 'Totvs Dropdown';
    this.properties = [];
  }

  showAction(label: string): void {
    this.thfNotification.success(`Action clicked: ${label}`);
  }

}

