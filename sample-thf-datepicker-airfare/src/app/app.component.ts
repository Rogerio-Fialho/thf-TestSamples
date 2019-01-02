import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-datepicker-airfare',
  templateUrl: './sample-thf-datepicker-airfare.component.html'
})
export class SampleThfDatepickerAirfareComponent {

  accompany: number = 0;
  classValue: string = 'Economy';
  destination: string;
  dialogMessage: string;
  dialogTitle: string = 'Confirm';
  endDate: string;
  origin: string;
  startDate: string;

  @ViewChild('formAirfare') formAirfare: FormControl;

  public readonly accompanyNumber: Array<ThfSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClass: Array<ThfSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business Class', label: 'Business Class' },
    { value: 'First Class', label: 'First Class' }
  ];

  constructor(
    private thfDialog: ThfDialogService,
    private thfNotification: ThfNotificationService) { }

  apply() {
    this.dialogMessage = `Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.classValue} class?`;

    this.thfDialog.confirm({
      title: this.dialogTitle,
      message: this.dialogMessage,
      confirm: () => {
        this.thfNotification.success('Booking Confirmed');
        this.formAirfare.reset();
      },
      cancel: () => {
        this.thfNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }

}

