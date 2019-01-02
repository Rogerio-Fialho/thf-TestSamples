import { Component } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';
import { ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-calendar-ticket-sales',
  templateUrl: './sample-thf-calendar-ticket-sales.component.html'
})
export class SampleThfCalendarTicketSalesComponent {

  date: string;
  halfPriceTicketQuantity: number;
  tickets: number;

  readonly pageActions: Array<ThfPageAction> = [
    { label: 'Buy tickets', action: this.buyTickets, disabled: this.isdisableBuy.bind(this) }
  ];

  readonly ticketsOptions: Array<ThfSelectOption> = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ];

  constructor(private thfNotification: ThfNotificationService) {}

  private buyTickets() {
    this.thfNotification.success(`Tickets purchased to ${this.getDate(this.date)} successfully!`);

    this.date = undefined;
    this.tickets = undefined;
    this.halfPriceTicketQuantity = undefined;
  }

  private getDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return `${month}/${day}/${year}`;
  }

  private isdisableBuy(): boolean {
    return !(this.date && (this.tickets > 0 || this.halfPriceTicketQuantity > 0));
  }

}

