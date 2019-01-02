import { Component } from '@angular/core';

@Component({
  selector: 'sample-thf-avatar-business-card',
  templateUrl: './sample-thf-avatar-business-card.component.html'
})
export class SampleThfAvatarBusinessCardComponent {

  contact = {
    name: 'Mr. Dev Totvs',
    email: 'dev.totvs@totvs.com',
    phone: '47912012015'
  };

  callContact(phone) {
    window.open(`tel:${phone}`, '_self');
  }

  sendContact(email) {
    window.open(`mailto:${email}`, '_self');
  }

  formatPhoneNumber(phone) {
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
  }

}

