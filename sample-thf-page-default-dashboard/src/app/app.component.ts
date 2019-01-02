import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

import { SampleDashboardService } from './sample-thf-page-default-dashboard.service';

@Component({
  selector: 'sample-thf-page-default-dashboard',
  templateUrl: './sample-thf-page-default-dashboard.component.html',
  styles: [`
    .sample-widget-text-subtitle {
      font-family: NunitoSans;
      font-size: 14px;
      text-align: center;
      color: #9da7a9;
    }
  `],
  providers: [SampleDashboardService]
})
export class SampleThfPageDefaultDashboardComponent {

  columns: Array<ThfTableColumn> = this.sampleDashboardService.getColumns();
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object> = this.sampleDashboardService.getItems();

  public readonly actions: Array<ThfPageAction> = [
    { label: 'Share', action: this.modalOpen, icon: 'thf-icon-share' },
    { label: 'Disable notification', icon: 'thf-icon-notification', action: this.disableNotification, disabled: () => this.isSubscribed },
  ];

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Dashboard' }
    ]
  };

  public readonly cancelAction: ThfModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: ThfModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  @ViewChild('formShare') formShare: NgForm;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService,
              private sampleDashboardService: SampleDashboardService) { }

  modalClose() {
    this.thfModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.thfModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.thfNotification.success(`Webpage shared successfully to: ${this.email}.`);
    } else {
      this.thfNotification.error(`Email invalid.`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }

}

