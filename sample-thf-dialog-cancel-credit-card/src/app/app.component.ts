import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';
import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-dialog-cancel-credit-card',
  templateUrl: './sample-thf-dialog-cancel-credit-card.component.html',
})
export class SampleThfDialogCancelCreditCardComponent implements OnDestroy, OnInit {

  action: Array<ThfPageAction>;
  address: string;
  cardNumber: string;
  cardType: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  securityCode: string;
  stateProvince: string;
  zipPostalCode: string;

  private statusSubscription: Subscription;

  public readonly cardTypeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Master Card', value: 'Master'},
    { label: 'Visa', value: 'visa'},
    { label: 'Diners', value: 'diners'},
    { label: 'Hipercard', value: 'hipercard'}
  ];

  @ViewChild('form') form: FormControl;

  constructor(private thfDialog: ThfDialogService, private thfNotification: ThfNotificationService) { }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit() {
    this.action = [{
      label: 'Cancel',
      icon: 'thf-icon thf-icon-delete',
      action: 'openConfirmDialog',
      disabled: true
    }];
    this.statusSubscription = this.form.statusChanges.subscribe(status => this.actionDisabledCheck(status));
  }

  actionDisabledCheck(status: string) {
    this.action[0].disabled = status === 'INVALID';
  }

  confirmCancelation() {
    this.thfNotification.success(`Credit card ${this.cardNumber} canceled`);
    this.form.reset();
  }

  openConfirmDialog() {
    this.thfDialog.confirm({
      title: 'Confirm',
      message: `Hi ${this.name},  do you confirm the cancellation of the card number ${this.cardNumber} ?`,
      confirm: () => this.confirmCancelation()
    });
  }

}

