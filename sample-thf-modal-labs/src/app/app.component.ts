import { Component, OnInit, ViewChild } from '@angular/core';

import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfRadioGroupOption, ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-modal-labs',
  templateUrl: './sample-thf-modal-labs.component.html'
})
export class SampleThfModalLabsComponent implements OnInit {

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  content;
  size;
  title;

  primaryAction: ThfModalAction = {
    action: () => {
      this.thfModal.close();
    },
    label: 'Confirm'
  };

  primaryActionLabel: string;
  primaryActionProperties: Array<string>;
  primaryActionOptions: Array<ThfCheckboxGroupOption> = [
    {value: 'danger', label: 'Danger' },
    {value: 'disabled', label: 'Disabled' },
    {value: 'loading', label: 'Loading' }
  ];

  secondaryAction: ThfModalAction = {
    action: () => {
      this.thfModal.close();
    },
    label: 'Cancel'
  };

  secondaryActionLabel: string;
  secondaryActionProperties: Array<string>;
  secondaryActionOptions: Array<ThfCheckboxGroupOption> = [
    {value: 'disabled', label: 'Disabled' },
    {value: 'loading', label: 'Loading' },
    {value: 'danger', label: 'Danger' }
  ];

  propertiesOptions: Array<ThfCheckboxGroupOption> = [
    {value: 'click-out', label: 'Click Out' },
    {value: 'hide-close', label: 'Hide Close' }
  ];

  properties: Array<string>;

  sizeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
    { label: 'Automatic', value: 'auto' },
  ];

  openModal() {
    this.primaryAction.disabled = this.primaryActionProperties.includes('disabled');
    this.primaryAction.label = this.primaryActionLabel;
    this.primaryAction.loading = this.primaryActionProperties.includes('loading');
    this.primaryAction.danger = this.primaryActionProperties.includes('danger');

    this.secondaryAction.disabled = this.secondaryActionProperties.includes('disabled');
    this.secondaryAction.label = this.secondaryActionLabel;
    this.secondaryAction.loading = this.secondaryActionProperties.includes('loading');
    this.secondaryAction.danger = this.secondaryActionProperties.includes('danger');

    this.thfModal.open();
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.size = undefined;
    this.content = undefined;
    this.title = 'Totvs Modal';
    this.properties = [];
    this.primaryActionLabel = undefined;
    this.primaryActionProperties = [];
    this.secondaryActionLabel = undefined;
    this.secondaryActionProperties = [];
  }

}

