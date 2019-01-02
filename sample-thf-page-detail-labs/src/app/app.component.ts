import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb, ThfBreadcrumbItem } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfPageDetailLiterals } from '@totvs/thf-ui/components/thf-page';

@Component({
  selector: 'sample-thf-page-detail-labs',
  templateUrl: './sample-thf-page-detail-labs.component.html'
})
export class SampleThfPageDetailLabsComponent implements OnInit {

  action: string;
  breadcrumb: ThfBreadcrumb;
  breadcrumbItem: ThfBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: ThfPageDetailLiterals;
  literals: string;
  params: any;
  title: string;

  ngOnInit() {
    this.restore();
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'Totvs Page Detail';
  }

 }

