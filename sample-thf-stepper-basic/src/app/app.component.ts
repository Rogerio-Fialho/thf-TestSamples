import { Component } from '@angular/core';

@Component({
  selector: 'sample-thf-stepper-basic',
  templateUrl: './sample-thf-stepper-basic.component.html',
})
export class SampleThfStepperBasicComponent {

  step: number;

  changeStep(stepNumber: number) {
    this.step = stepNumber;
  }

}

