import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ThfCheckboxGroupOption, ThfComboOption } from '@totvs/thf-ui/components/thf-field';
import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-modal-fruits-salad',
  templateUrl: './sample-thf-modal-fruits-salad.component.html'
})
export class SampleThfModalFruitsSaladComponent {

  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: ThfModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: ThfModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly accompanimentOptions: Array<ThfComboOption> = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'hazeinut', label: 'Hazelnut' },
    {value: 'milk', label: 'Milk'}
  ];

  public readonly fruitsOptions: Array<ThfCheckboxGroupOption> = [
    {value: 'orange', label: 'Orange'},
    {value: 'apple', label: 'Apple' },
    {value: 'pineapple', label: 'Pineapple'},
    {value: 'graple', label: 'Grape' },
    {value: 'strawberry', label: 'Strawberry'}
  ];

  @ViewChild('optionsForm') form: NgForm;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService) { }

  closeModal() {
    this.form.reset();
    this.thfModal.close();
  }

  openQuestionnaire() {
    this.thfModal.open();
  }

  private proccessOrder() {

    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.thfNotification.warning(orderInvalidMessage);

    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.thfNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`);
        this.confirm.loading = false;
        this.closeModal();

      }, 700);

    }

  }

}

