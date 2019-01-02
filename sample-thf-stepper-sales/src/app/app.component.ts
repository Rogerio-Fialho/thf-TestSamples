import { Component, OnInit, ViewChild } from '@angular/core';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfStepperItem, ThfStepperStatus } from '@totvs/thf-ui/components/thf-stepper';

@Component({
  selector: 'sample-thf-stepper-sales',
  templateUrl: './sample-thf-stepper-sales.component.html'
})
export class SampleThfStepperSalesComponent implements OnInit {

  birthday: string;
  cardCode: string;
  cardName: string;
  cardValid: string;
  city: string;
  code: string;
  country: string;
  document: string;
  name: string;
  number: string;
  reference: string;
  street: string;
  labelWidget: string;
  step: number;

  public steps: Array<ThfStepperItem>  = [
    { label: 'Personal' },
    { label: 'Address' },
    { label: 'Payment' },
    { label: 'Finish' },
  ];

  @ViewChild('sucessData') sucessData: ThfModalComponent;

  ngOnInit() {
    this.nextStep(1);
  }

  onConfirmStep(stepNumber: number) {
    if (stepNumber >= 5) {
      this.sucessData.open();
    }
    this.nextStep(stepNumber);
  }

  nextStep(stepNumber: number) {
    const steps =  this.steps[this.step - 1];

    this.step = stepNumber;
    if (steps) {
      steps.status = ThfStepperStatus.Done;
    }

    if (stepNumber === 1 || stepNumber === 2 || stepNumber === 3) {
      this.labelWidget = 'Next Step';
    } else {
      this.labelWidget = 'Confirm Purchase';
    }
  }

}

