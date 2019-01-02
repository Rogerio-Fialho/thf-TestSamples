import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb, ThfBreadcrumbItem } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';

@Component({
  selector: 'sample-thf-page-default-labs',
  templateUrl: './sample-thf-page-default-labs.component.html'
})
export class SampleThfPageDefaultLabsComponent implements OnInit {

  action: ThfPageAction;
  actions: Array<ThfPageAction>;
  breadcrumb: ThfBreadcrumb;
  breadcrumbItem: ThfBreadcrumbItem;
  breadcrumbParams: any;
  title: string;

  public readonly iconOptions = [
    { value: 'thf-icon-plus', label: 'thf-icon-plus' },
    { value: 'thf-icon-copy', label: 'thf-icon-copy' },
    { value: 'thf-icon-totvs', label: 'thf-icon-totvs' }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  addAction() {
    this.action.action = this.action.action ? this.showAction.bind(this, this.action.action) : undefined;
    this.actions.push(this.action);

    this.action = { label: undefined };
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = {[this.breadcrumbParams.property]: this.breadcrumbParams.value};

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  restore() {
    this.action = { label: undefined };
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.title = 'Totvs Page Default';
  }

  showAction(label: string): void {
    this.thfNotification.success(`Action clicked: ${label}`);
  }

}

