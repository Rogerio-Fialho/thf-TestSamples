import { Component } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-notification-basic',
  templateUrl: './sample-thf-notification-basic.component.html',
})
export class SampleThfNotificationBasicComponent {

  constructor(public thfNotification: ThfNotificationService) { }

}

