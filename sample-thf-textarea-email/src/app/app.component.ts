import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';

@Component({
  selector: 'sample-thf-textarea-email',
  templateUrl: './sample-thf-textarea-email.component.html'
})
export class SampleThfTextareaEmailComponent {

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<ThfPageAction>;
  primaryAction: ThfModalAction = {
    action: () => {
      this.thfModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  @ViewChild('formEmail') formEmail: FormControl;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
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

