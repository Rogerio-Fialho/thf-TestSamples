import { Component } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-loading-overlay-connection-test',
  templateUrl: 'sample-thf-loading-overlay-connection-test.component.html'
})

export class SampleThfLoadingOverlayConnectionTestComponent {

  environment = {
    urlServer: '',
    urlDB: '',
    userDB: '',
    passwordDB: ''
  };

  isHideLoading = true;

  constructor(private thfNotification: ThfNotificationService) { }

  connectionTest() {
    const message = 'Connection ok';

    this.isHideLoading = false;

    setTimeout(() => {
      this.isHideLoading = true;
      this.thfNotification.success(message);

    }, 450);

  }

}

