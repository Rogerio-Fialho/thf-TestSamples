import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfRadioGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfToolbarAction, ThfToolbarProfile } from '@totvs/thf-ui/components/thf-toolbar';

@Component({
  selector: 'sample-thf-toolbar-labs',
  templateUrl: './sample-thf-toolbar-labs.component.html'
})
export class SampleThfToolbarLabsComponent implements OnInit {

  action: ThfToolbarAction;
  actions: Array<ThfToolbarAction>;
  actionsIcon: string;
  notificationActions: Array<ThfToolbarAction>;
  notificationNumber: number;
  profile: ThfToolbarProfile;
  profileActions: Array<ThfToolbarAction>;
  showNotification: boolean;
  title: string;
  toolbarActionType: string;

  public readonly actionTypes: Array<ThfRadioGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'default', label: 'Default' }
  ];

  public readonly iconOptions: Array<ThfSelectOption> = [
    { value: 'thf-icon-chat', label: 'thf-icon-chat' },
    { value: 'thf-icon-clock', label: 'thf-icon-clock' },
    { value: 'thf-icon-exit', label: 'thf-icon-exit' },
    { value: 'thf-icon-lock', label: 'thf-icon-lock' },
    { value: 'thf-icon-settings', label: 'thf-icon-settings' },
    { value: 'thf-icon-star', label: 'thf-icon-star' }
  ];

  public readonly toolbarActionTypes: Array<ThfRadioGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Profile', value: 'profile' },
    { label: 'Notification', value: 'notification' }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  addAction(action, form: NgForm) {
    const newAction = Object.assign({}, action);

    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (this.toolbarActionType === 'profile') {
      this.profileActions.push(newAction);
    } else if (this.toolbarActionType === 'notification') {
      this.notificationActions.push(newAction);
    } else {
      this.actions.push(newAction);
    }
    form.reset();
  }

  restore() {
    this.action = { label: undefined };
    this.profile = { avatar: '', subtitle: '', title: ''};
    this.actions = [];
    this.actionsIcon = undefined;
    this.profileActions = [];
    this.notificationActions = [];
    this.notificationNumber = undefined;
    this.showNotification = true;
    this.title = 'Totvs Toolbar';
  }

  showAction(label: string): void {
    this.thfNotification.success(`Action clicked: ${label}`);
  }

}

