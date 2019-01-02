import { Component } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfSwitchLabelPosition } from '@totvs/thf-ui/components/thf-field';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Component({
  selector: 'sample-thf-switch-order',
  templateUrl: './sample-thf-switch-order.component.html'
})
export class SampleThfSwitchOrderComponent {

  labelPosition: ThfSwitchLabelPosition = ThfSwitchLabelPosition.Left;
  serviceFee: boolean = false;
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
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.thfNotification.success('Purchase done Successful!');
  }

}

