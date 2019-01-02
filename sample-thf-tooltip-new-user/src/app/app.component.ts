import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-tooltip-new-user',
  templateUrl: './sample-thf-tooltip-new-user.component.html'
})
export class SampleThfTooltipNewUserComponent implements OnInit {

  birthDate: Date;
  confirmPassword: string;
  CPF: string;
  email: string;
  emailTooltip: string;
  genre: string;
  name: string;
  nameTooltip: string;
  password: string;
  passwordTooltip: string;
  registration: number;
  registrationTooltip: string;

  @ViewChild('formNewUser') formNewUser: FormControl;

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.formNewUser.reset();
  }

  confirm() {
    if (this.formNewUser.valid) {
      this.thfNotification.success(`New user registered`);
      this.cancel();
    } else {
      this.thfNotification.error(`Please fill in the required fields`);
    }
  }

  initialize() {
    this.emailTooltip = 'Totvs email provided on the registration form';
    this.nameTooltip = 'Enter full name';
    this.passwordTooltip = 'Password must contain at least 8 characters';
    this.registrationTooltip = 'The registration number is on the registration form';
  }

}

