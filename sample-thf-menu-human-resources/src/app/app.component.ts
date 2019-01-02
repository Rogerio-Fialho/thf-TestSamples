import { Component } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui/components/thf-menu';

@Component({
  selector: 'sample-thf-menu-human-resources',
  templateUrl: './sample-thf-menu-human-resources.component.html'
})
export class SampleThfMenuHumanResourcesComponent {

  menuItemSelected: string;

  menus: Array<ThfMenuItem> = [
    { label: 'Register user', action: this.printMenuAction, icon: 'thf-icon-user', shortLabel: 'Register' },
    { label: 'Timekeeping', action: this.printMenuAction, icon: 'thf-icon-clock', shortLabel: 'Timekeeping' },
    { label: 'Useful links', icon: 'thf-icon-share', shortLabel: 'Links', subItems: [
      { label: 'Ministry of Labour', action: this.printMenuAction, link: 'http://trabalho.gov.br/' },
      { label: 'SindPD Syndicate', action: this.printMenuAction, link: 'http://www.sindpd.com.br/' }
    ]},
    { label: 'Benefits', icon: 'thf-icon-star', shortLabel: 'Benefits', subItems: [
      { label: 'Meal tickets', subItems: [
        { label: 'Acceptance network ', action: this.printMenuAction },
        { label: 'Extracts', action: this.printMenuAction, subItems: [
          { label: 'Monthly', action: this.printMenuAction },
          { label: 'Custom', action: this.printMenuAction }
        ]}
      ]},
      { label: 'Transportation tickets', action: this.printMenuAction }
    ]}
  ];

  printMenuAction(menu: ThfMenuItem) {
    this.menuItemSelected = menu.label;
  }

}

