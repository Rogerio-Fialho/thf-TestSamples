import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb, ThfBreadcrumbItem } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfPageAction, ThfPageFilter, ThfPageListLiterals } from '@totvs/thf-ui/components/thf-page';
import { ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-page-list-labs',
  templateUrl: './sample-thf-page-list-labs.component.html'
})
export class SampleThfPageListLabsComponent implements OnInit {

  action: ThfPageAction;
  actions: Array<ThfPageAction>;
  breadcrumb: ThfBreadcrumb;
  breadcrumbItem: ThfBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: ThfPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;

  public disclaimerGroup;

  public readonly filter: ThfPageFilter = {
    placeholder: '',
    action: this.showAction.bind(this, 'Filter'),
    advancedAction: this.showAction.bind(this, 'Advanced filter'),
    ngModel: 'filterModel'
  };

  public readonly iconOptions: Array<ThfSelectOption> = [
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

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [...this.disclaimerGroup.disclaimers, {
      label: this.disclaimerLabel,
      property: this.disclaimerProperty,
      hideClose: this.disclaimerHideClose,
      value: this.disclaimerValue
    }];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.action = { label: undefined };
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = '';
    this.literals = '';
    this.title = 'Totvs Page List';

    this.restoreDisclaimerModel();
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(label) {
    this.thfNotification.success(`Action clicked: ${label}`);
  }

}

