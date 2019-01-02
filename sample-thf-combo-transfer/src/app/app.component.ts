import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-combo-transfer',
  templateUrl: './sample-thf-combo-transfer.component.html'
})
export class SampleThfComboTransferComponent {

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: ThfModalAction = {
    label: 'Cancel',
    action: () => this.thfModal.close()
  };

  confirmAction: ThfModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<ThfSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  @ViewChild('transferForm') form: NgForm;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService) { }

  confirmTransfer() {
    this.thfModal.close();

    this.thfNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.thfModal.open();
  }

  private formReset() {

    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });

  }
}

