import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfPopupAction } from '@totvs/thf-ui/components/thf-popup/thf-popup-action.interface';

@Component({
  selector: 'sample-thf-popup-email',
  templateUrl: './sample-thf-popup-email.component.html',
  styles : [`
    .sample-logo-totvs {
      height: 15%;
      padding-top: 2.5%;
    }

    .sample-popup-header-template {
      background-color: #0c9abe;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      color: #ffffff;
      padding-bottom: 5%;
      padding-left: 25%;
      padding-top: 5%;
    }
  `]
})
export class SampleThfPopupEmailComponent implements OnInit {

  @ViewChild('formEmail') formEmail: FormControl;

  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  cc: string;
  emailText: string;
  from: string;
  popupActions: Array<ThfPopupAction>;
  primaryAction: ThfModalAction;
  subject: string;
  to: string;

  ngOnInit() {
    this.popupActions = [
      { icon: 'thf-icon-plus', label: 'Upper Text', type: 'default', action: this.upper },
      { icon: 'thf-icon-minus', label: 'Lower Text', type: 'default', action: this.lower },
      { icon: 'thf-icon-close', label: 'Clear', type: 'danger' , action: this.clear, separator: true},
    ];

    this.primaryAction = {
      label: 'Confirmar',
      action: () => {
        this.thfModal.close();
        this.reset();
      }
    };

  }

  send() {
    this.thfModal.open();
  }

  reset() {
    this.formEmail.reset();
  }

  private clear() {
    this.emailText = undefined;
  }

  private lower() {
    this.emailText = this.emailText && this.emailText.toLowerCase();
  }

  private upper() {
    this.emailText = this.emailText && this.emailText.toUpperCase();
  }

}

