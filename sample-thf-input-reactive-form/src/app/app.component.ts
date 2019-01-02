import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';

@Component({
  selector: 'sample-thf-input-reactive-form',
  templateUrl: './sample-thf-input-reactive-form.component.html'
})
export class SampleThfInputReactiveFormComponent {

  reactiveForm: FormGroup;

  public readonly modalPrimaryAction: ThfModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  @ViewChild('reactiveFormData') reactiveFormModal: ThfModalComponent;

  constructor(private fb: FormBuilder) {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(30)
      ])],
      address: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
      ])],
      number: ['', Validators.compose([
        Validators.required, Validators.min(1), Validators.max(99999)
      ])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }

}

