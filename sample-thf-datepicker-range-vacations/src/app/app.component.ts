import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThfDatepickerRange } from '@totvs/thf-ui/components/thf-field/thf-datepicker-range/interfaces/thf-datepicker-range.interface';
import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-datepicker-range-vacations',
  templateUrl: './sample-thf-datepicker-range-vacations.component.html'
})
export class SampleThfDatepickerRangeVacationsComponent {

  datepickerRange: ThfDatepickerRange;
  quantityOfDays: number = undefined;
  reason: string;

  cancel: ThfModalAction = {
    action: () => {
      this.thfModal.close();
    },
    label: 'Cancel'
  };

  submit: ThfModalAction = {
    action: () => {
      this.thfModal.close();
      this.formVacationSuggestion.reset();
      this.thfNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(this.formVacationSuggestion.valid && this.datepickerRange && this.datepickerRange.start && this.datepickerRange.end);
  }

  @ViewChild('formVacationSuggestion') formVacationSuggestion: FormControl;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService) { }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.datepickerRange.start);
    const end = new Date(this.datepickerRange.end);

    this.quantityOfDays = Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
      Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) ) / (1000 * 60 * 60 * 24));
  }

  clean() {
    this.datepickerRange = undefined;
    this.quantityOfDays = undefined;
    this.reason = undefined;
  }

}

