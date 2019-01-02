import { Injectable } from '@angular/core';

import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Injectable()
export class SampleDashboardService {

  getColumns(): Array<ThfTableColumn> {
    return [
      { column: 'cities', label: 'Cities that most downloaded THF'},
      { column: 'package', label: 'Package version' },
      { column: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'São Paulo', package: '2.0.0-beta.2', downloads: '2000'},
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250'},
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' },
    ];
  }

}

lumns();
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

