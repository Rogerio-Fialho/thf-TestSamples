import { Component } from '@angular/core';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';

@Component({
  selector: 'sample-thf-password-reset',
  templateUrl: './sample-thf-password-reset.component.html',
  providers: [ThfDialogService]
})
export class SampleThfPasswordResetComponent {

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  constructor(private thfAlert: ThfDialogService) { }

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {

      this.password = this.newPassword;
      this.help = `Actual password = ${this.password}`;
      this.currentPassword = undefined;
      this.newPassword  = undefined;
      this.confirmNewPassword = undefined;

      this.thfAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.thfAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword  = undefined;
    this.confirmNewPassword = undefined;
  }

}

