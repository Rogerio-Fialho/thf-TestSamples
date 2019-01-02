import { Component } from '@angular/core';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';

@Component({
  selector: 'sample-thf-email-newsletter',
  templateUrl: './sample-thf-email-newsletter.component.html'
})
export class SampleThfEmailNewsletterComponent {

  email: string = '';

  constructor(private thfAlert: ThfDialogService) { }

  openDialog() {
    this.thfAlert.alert({
      title: 'Sent with success!',
      message: `Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from THF!`
    });
  }

  private getNameEmail() {
    const index = this.email.indexOf('@');

    return this.email.substr(0, index).toLocaleUpperCase();
  }

}

