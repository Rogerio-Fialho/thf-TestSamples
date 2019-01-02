import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfSwitchLabelPosition } from '@totvs/thf-ui/components/thf-field';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Component({
  selector: 'sample-thf-switch-order-reactive-form',
  templateUrl: './sample-thf-switch-order-reactive-form.component.html'
})
export class SampleThfSwitchOrderReactiveFormComponent implements OnInit {

  formOrderSummary: FormGroup;
  labelPosition: ThfSwitchLabelPosition = ThfSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<ThfTableColumn> = [
    {
      column: 'page',
      label: 'Product'
    },
    {
      column: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL',
    },
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(
    private thfNotification: ThfNotificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.thfNotification.success('Purchase done Successful!');
  }

}

