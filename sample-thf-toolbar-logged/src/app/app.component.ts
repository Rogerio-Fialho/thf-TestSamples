import { Component } from '@angular/core';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfToolbarAction, ThfToolbarProfile } from '@totvs/thf-ui/components/thf-toolbar';

@Component({
  selector: 'sample-thf-toolbar-logged',
  templateUrl: './sample-thf-toolbar-logged.component.html',
  providers: [ThfNotificationService]
})
export class SampleThfToolbarLoggedComponent {

  notificationActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-totvs', label: 'THF news, stay tuned!', type: 'danger',
      action: item => this.onClickNotification(item) },
    { icon: 'thf-icon-message', label: 'New message', type: 'danger',
      action: item => this.openDialog(item) },
  ];

  profile: ThfToolbarProfile = {
    avatar: 'https://thf.totvs.com.br/assets/graphics/logo-thf.png',
    subtitle: 'dev@totvs.com.br',
    title: 'Mr. Dev Totvs'
  };

  profileActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-user', label: 'User data', action: item => this.showAction(item) },
    { icon: 'thf-icon-company', label: 'Company data', action: item => this.showAction(item) },
    { icon: 'thf-icon-settings', label: 'Settings', action: item => this.showAction(item) },
    { icon: 'thf-icon-exit', label: 'Exit', type: 'danger', separator: true, action: item => this.showAction(item) }
  ];

  actions: Array<ThfToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  title: string = 'Totvs Toolbar Logged';

  constructor(private thfDialog: ThfDialogService, private thfNotification: ThfNotificationService) { }

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: ThfToolbarAction) {
    window.open('https://thf.totvs.com.br/dev', '_blank');

    item.type = 'default';
  }

  openDialog(item: ThfToolbarAction) {
    this.thfDialog.alert({
      title: 'Welcome',
      message: `Hello Mr. Dev! Congratulations, you are a TOTVER!`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: ThfToolbarAction): void {
    this.thfNotification.success(`Action clicked: ${item.label}`);
  }

}

