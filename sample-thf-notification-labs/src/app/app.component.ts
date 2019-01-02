import { Component, ViewChild, OnInit } from '@angular/core';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfNotification, ThfNotificationService, ThfToasterOrientation, ThfToasterType } from '@totvs/thf-ui/services/thf-notification';
import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-notification-labs',
  templateUrl: './sample-thf-notification-labs.component.html',
  providers: [ThfNotificationService]
})
export class SampleThfNotificationLabsComponent implements OnInit {

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number ;
  type: number;

  public readonly orientationOptions: Array<ThfRadioGroupOption> = [
    { label: 'Top', value: ThfToasterOrientation.Top },
    { label: 'Bottom', value: ThfToasterOrientation.Bottom }
  ];

  public readonly typeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Success', value: ThfToasterType.Success },
    { label: 'Error', value: ThfToasterType.Error },
    { label: 'Warning', value: ThfToasterType.Warning },
    { label: 'Information', value: ThfToasterType.Information }
  ];

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.message = 'Totvs Notification';
    this.type = undefined;
    this.orientation = undefined;
    this.action = false;
    this.actionLabel = '';
  }

  showNotification() {
    const thfNotification: ThfNotification = {
      message: this.message,
      orientation: this.orientation,
      action: undefined,
      actionLabel: this.actionLabel
    };

    if (this.action) {
      thfNotification.action = () => this.thfModal.open();
    }

    switch (this.type) {
      case ThfToasterType.Success: {
        this.thfNotification.success(thfNotification);
        break;
      }
      case ThfToasterType.Error: {
        this.thfNotification.error(thfNotification);
        break;
      }
      case ThfToasterType.Warning: {
        this.thfNotification.warning(thfNotification);
        break;
      }
      case ThfToasterType.Information: {
        this.thfNotification.information(thfNotification);
        break;
      }
      default: {
        this.thfNotification.success(thfNotification);
        break;
      }
    }
  }

}

