import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfListViewAction, ThfListViewLiterals } from '@totvs/thf-ui/components/thf-list-view';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-list-view-labs',
  templateUrl: './sample-thf-list-view-labs.component.html'
})
export class SampleThfListViewLabsComponent implements OnInit {

  action: ThfListViewAction;
  actions: Array<ThfListViewAction>;
  customLiterals: ThfListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  readonly actionOptions: Array<ThfCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly iconOptions: Array<ThfSelectOption> = [
    { value: 'thf-icon-totvs', label: 'thf-icon-totvs' },
    { value: 'thf-icon-search', label: 'thf-icon-search' },
    { value: 'thf-icon-world', label: 'thf-icon-world' }
  ];

  readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'select', label: 'Select' },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly propertyTitleOptions: Array<ThfSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<ThfSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  addAction(action: ThfListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions[0].disabled = !this.properties.includes(this.propertiesOptions[1].value);
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: `Register ${index}`,
      email: `register${index}@totvs.com`,
      phone: `(55) ${index}234567`,
      location: 'Brazil',
      company: `Company ${index}`,
      url: this.propertyLinkValue,
      zipCode: `${index}221`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.thfNotification.success(`Action clicked: ${action}`);
  }

}

