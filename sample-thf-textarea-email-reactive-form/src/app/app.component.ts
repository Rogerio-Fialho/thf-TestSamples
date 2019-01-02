import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';

@Component({
  selector: 'sample-thf-textarea-email-reactive-form',
  templateUrl: './sample-thf-textarea-email-reactive-form.component.html'
})
export class SampleThfTextareaEmailReactiveFormComponent implements OnInit {

  formEmail: FormGroup;
  pageActions: Array<ThfPageAction>;
  primaryAction: ThfModalAction = {
    action: () => {
      this.thfModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      {label: 'Send', action: this.send, disabled: isDisabled},
      {label: 'Clean', action: this.reset}
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.thfModal.open();
  }

}

