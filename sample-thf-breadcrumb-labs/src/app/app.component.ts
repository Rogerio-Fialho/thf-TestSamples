import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumbItem } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-breadcrumb-labs',
  templateUrl: './sample-thf-breadcrumb-labs.component.html',
})
export class SampleThfBreadcrumbLabsComponent implements OnInit {

  breadcrumbItem: ThfBreadcrumbItem;
  breadcrumbItems: Array<ThfBreadcrumbItem>;
  favoriteService: string;
  paramsService: object;

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  addBreadcrumb() {
    const breadcrumbItem: ThfBreadcrumbItem = Object.assign({}, this.breadcrumbItem);
    breadcrumbItem.action = breadcrumbItem.action ? this.showAction.bind(this, breadcrumbItem.action) : undefined;

    this.breadcrumbItems = [...this.breadcrumbItems, breadcrumbItem];

    this.restoreBreadcrumbItemForm();
  }

  restore() {
    this.favoriteService = undefined;
    this.paramsService = undefined;
    this.breadcrumbItems = [];
    this.restoreBreadcrumbItemForm();
  }

  restoreBreadcrumbItemForm() {
    this.breadcrumbItem = { action: undefined, label: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.thfNotification.success(`Breadcrumb clicked: ${action}`);
  }

}

