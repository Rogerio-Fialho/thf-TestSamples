import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb, ThfBreadcrumbItem } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfPageEditLiterals } from '@totvs/thf-ui/components/thf-page';

@Component({
  selector: 'sample-thf-page-edit-labs',
  templateUrl: './sample-thf-page-edit-labs.component.html'
})
export class SampleThfPageEditLabsComponent implements OnInit {

  action: string;
  breadcrumb: ThfBreadcrumb;
  breadcrumbItem: ThfBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: ThfPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [{ value: 'disableSubmit', label: 'Disable Submit' }];

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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'Totvs Page Edit';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }

}

