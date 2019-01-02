import { Component } from '@angular/core';

import { ThfMenuPanelItem } from '@totvs/thf-ui/components/thf-menu-panel';

@Component({
  selector: 'sample-thf-menu-panel-customer',
  templateUrl: './sample-thf-menu-panel-customer.component.html'
})
export class SampleThfMenuPanelCustomerComponent {

  title: string = 'Customers';

  public readonly menuItems: Array<ThfMenuPanelItem> = [
    { label: 'Home', action: this.changeTitle, icon: 'thf-icon-home' },
    { label: 'Customers', action: this.changeTitle, icon: 'thf-icon-user' },
    { label: 'New Sale', action: this.changeTitle, icon: 'thf-icon-money' },
    { label: 'Reports', action: this.changeTitle, icon: 'thf-icon-news' },
    { label: 'Settings', action: this.changeTitle, icon: 'thf-icon-settings' }
  ];

  changeTitle(menu: ThfMenuPanelItem) {
    this.title = menu.label;
  }

}

