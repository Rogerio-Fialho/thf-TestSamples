import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ThfDatepickerRange } from '@totvs/thf-ui/components/thf-field/thf-datepicker-range/interfaces/thf-datepicker-range.interface';
import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-datepicker-range-vacations-reactive-form',
  templateUrl: './sample-thf-datepicker-range-vacations-reactive-form.component.html'
})
export class SampleThfDatepickerRangeVacationsReactiveFormComponent implements OnInit {

  datepickerRange: ThfDatepickerRange;
  formVacationSuggestion: FormGroup;
  quantityOfDays: number;
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
    return !(this.formVacationSuggestion.valid && this.formVacationSuggestion.get('datepickerRange').value.start
      && this.formVacationSuggestion.get('datepickerRange').value.end);
  }

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formVacationSuggestion = this.formBuilder.group({
      datepickerRange: [undefined, Validators.required],
      quantityOfDays: [undefined],
      reason: [undefined]
    });

  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.formVacationSuggestion.get('datepickerRange').value.start);
    const end = new Date(this.formVacationSuggestion.get('datepickerRange').value.end);

    const result = Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
      Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) ) / (1000 * 60 * 60 * 24));

    this.formVacationSuggestion.get('quantityOfDays').setValue(result);
  }

  clean() {
    this.formVacationSuggestion.reset();
  }

  submitForm() {
    this.datepickerRange = this.formVacationSuggestion.get('datepickerRange').value;
    this.reason = this.formVacationSuggestion.get('reason').value;
    this.quantityOfDays = this.formVacationSuggestion.get('quantityOfDays').value;
  }

}

