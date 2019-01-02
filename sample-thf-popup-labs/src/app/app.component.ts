import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfCheckboxGroupOption, ThfRadioGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfPopupAction } from '@totvs/thf-ui/components/thf-popup';

@Component({
  selector: 'sample-thf-popup-labs',
  templateUrl: './sample-thf-popup-labs.component.html',
  styles: [`
    .sample-button-container {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `]
})
export class SampleThfPopupLabsComponent implements OnInit {

  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  action: ThfPopupAction;
  actions: Array<ThfPopupAction>;
  position: string;
  properties: Array<string>;

  public readonly actionOptions: Array<ThfCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<ThfSelectOption> = [
    { value: 'thf-icon-totvs', label: 'thf-icon-totvs' },
    { value: 'thf-icon-search', label: 'thf-icon-search' },
    { value: 'thf-icon-world', label: 'thf-icon-world' }
  ];

  public readonly positionOptions: Array<ThfRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'hideArrow', label: 'Hide arrow' }
  ];

  public readonly typeOptions: Array<ThfSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  addAction(action: ThfPopupAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions.push(newAction);

    this.restoreActionForm();
  }

  restore() {
    this.actions = [];
    this.position = undefined;
    this.properties = [];
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  private showAction(action: string): any {
    this.thfNotification.success(`Action clicked: ${action}`);
  }

}

