import { Component, ViewChild } from '@angular/core';

import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-login-confirm',
  templateUrl: './sample-thf-login-confirm.component.html'
})
export class SampleThfLoginConfirmComponent {

  userLogin: string;
  userPassword: string;

  primaryAction: ThfModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService) { }

  openModal() {
    this.thfModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.thfNotification.success(`Discount successfully applied to user ${this.userLogin}!`);

      this.thfModal.close();
      this.cleanForm();
    }
  }

}

