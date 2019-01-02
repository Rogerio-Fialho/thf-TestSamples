import { Component, OnInit } from '@angular/core';

import { ThfRadioGroupOption, ThfSelectOption, ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfStepperItem, ThfStepperStatus } from '@totvs/thf-ui/components/thf-stepper';

@Component({
  selector: 'sample-thf-stepper-labs',
  templateUrl: './sample-thf-stepper-labs.component.html',
})
export class SampleThfStepperLabsComponent implements OnInit {

  mode: string;
  properties: Array<string>;
  sequential: boolean;
  step: number;
  stepItem: ThfStepperItem;
  steps: Array<ThfStepperItem>;

  public readonly modeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' }
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { label: 'Sequential', value: 'sequential'}
  ];

  public readonly stepOptions: Array<ThfSelectOption> = [
    { label: 'Active', value: ThfStepperStatus.Active },
    { label: 'Done', value: ThfStepperStatus.Done },
    { label: 'Default', value: ThfStepperStatus.Default }
  ];

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.steps.push(this.stepItem);
    this.stepItem = { label: undefined };
  }

  changeStep(stepNumber: number) {
    this.steps[this.step - 1].status = ThfStepperStatus.Done;
    this.step = stepNumber;
  }

  restore() {
    this.mode = undefined;
    this.properties = [];
    this.sequential = false;
    this.step = undefined;
    this.steps = [];
    this.stepItem = { label: undefined, status: undefined };
  }

}

