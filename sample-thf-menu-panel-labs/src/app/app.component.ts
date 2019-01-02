import { Component, OnInit } from '@angular/core';

import { ThfMenuPanelItem } from '@totvs/thf-ui/components/thf-menu-panel';
import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-menu-panel-labs',
  templateUrl: './sample-thf-menu-panel-labs.component.html'
})
export class SampleThfMenuPanelLabsComponent implements OnInit {

  menuItem: ThfMenuPanelItem = { icon: undefined, label: undefined };
  menuItems: Array<ThfMenuPanelItem>;
  menuItemSelected: string;

  public readonly iconsOptions: Array<ThfRadioGroupOption> = [
    { label: 'thf-icon-totvs', value: 'thf-icon-totvs' },
    { label: 'thf-icon-camera', value: 'thf-icon-camera' },
    { label: 'thf-icon-calendar', value: 'thf-icon-calendar' },
    { label: 'thf-icon-user', value: 'thf-icon-user' },
    { label: 'thf-icon-message', value: 'thf-icon-message' },
    { label: 'thf-icon-stock', value: 'thf-icon-stock' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem(menuItem: ThfMenuPanelItem) {
    const newMenuItem = Object.assign({}, menuItem, { action: this.onMenuItemSelected });

    this.menuItems = [...this.menuItems, newMenuItem];
  }

  restore() {
    this.menuItems = [];
    this.menuItemSelected = undefined;
  }

  private onMenuItemSelected(menu: ThfMenuPanelItem) {
    this.menuItemSelected = menu.label;
  }

}

