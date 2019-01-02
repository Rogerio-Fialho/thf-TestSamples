import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfTab } from '@totvs/thf-ui/components/thf-tabs';

@Component({
  selector: 'sample-thf-tabs-labs',
  templateUrl: './sample-thf-tabs-labs.component.html',
})
export class SampleThfTabsLabsComponent implements OnInit {

  properties: Array<string>;
  tab: ThfTab;
  tabs: Array<ThfTab> = [];

  readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { label: 'Small', value: 'small' }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.restore();
  }

  addTab(tab: ThfTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;

    this.tabs.push(newTab);
  }

  onClick(tab: ThfTab) {
    if (tab.click) {
      tab.click();
    }
  }

  restore() {
    this.tab = { label: '' };
    this.properties = [];
    this.tabs = [];
  }

  private showClick(action: string): any {
    this.thfNotification.success(`Action clicked: ${action}`);
  }

}

