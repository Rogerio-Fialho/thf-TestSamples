import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui/components/thf-menu';
import { ThfRadioGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-menu-labs',
  templateUrl: './sample-thf-menu-labs.component.html'
})
export class SampleThfMenuLabsComponent implements OnInit {

  filter: boolean;
  label: string;
  menuItems: Array<ThfMenuItem>;
  menuItemSelected: string;
  icon: string;
  link: string;
  parent: string;
  parentList: Array<ThfSelectOption>;
  shortLabel: string;

  public readonly iconsOptions: Array<ThfRadioGroupOption> = [
    { label: 'thf-icon-totvs', value: 'thf-icon-totvs' },
    { label: 'thf-icon-camera', value: 'thf-icon-camera' },
    { label: 'thf-icon-calendar', value: 'thf-icon-calendar' },
    { label: 'thf-icon-user', value: 'thf-icon-user' },
    { label: 'thf-icon-message', value: 'thf-icon-message' },
    { label: 'thf-icon-stock', value: 'thf-icon-stock' }
  ];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem() {
    if (!this.label) {
      return;
    }

    if (!this.parent) {
      this.menuItems.push({
        action: this.changeMenuSelected, icon: this.icon, label: this.label, link: this.link, shortLabel: this.shortLabel
      });
    } else {
      const menuParent = this.getMenuParent(this.menuItems, this.parent);

      if (!menuParent.subItems) {
        menuParent.subItems = [];
      }

      menuParent.subItems.push({
        action: this.changeMenuSelected, label: this.label, link: this.link
      });
    }

    this.formReset();
    this.updateMenuItems();
  }

  restore() {
    this.formReset();

    this.filter = false;
    this.menuItemSelected = undefined;

    this.parentList = [];
    this.menuItems = [];

    this.updateMenuItems();
  }

  private changeMenuSelected(menu: ThfMenuItem) {
    this.menuItemSelected = menu.label;
  }

  private formReset() {
    this.label = 'Totvs Menu';
    this.link = undefined;
    this.icon = undefined;
    this.parent = undefined;
    this.shortLabel = 'Menu';
  }

  private getMenuParent(menus: Array<ThfMenuItem>, id: string): ThfMenuItem {
    let menuParent;

    if (!menus) {
      return;
    }

    for (const subMenu of menus) {
      if (subMenu['id'] === id) {
        menuParent = subMenu;
        break;
      } else if (!menuParent) {
        menuParent = this.getMenuParent(subMenu.subItems, id);
      }
    }

    return menuParent;
  }

  private updateMenuItems() {
    this.changeDetector.detectChanges();

    this.parentList = [];

    this.menuItems.forEach(item => {
      this.parentList.push(<ThfSelectOption>{ label: item.label, value: item['id'] });

      if (item.subItems) {
        item.subItems.forEach(secondItem => {
          this.parentList.push(<ThfSelectOption>{ label: `- ${secondItem.label}`, value: secondItem['id'] });

          if (secondItem.subItems) {
            secondItem.subItems.forEach(thirdItem => {
              this.parentList.push(<ThfSelectOption>{ label: `-- ${thirdItem.label}`, value: thirdItem['id'] });
            });
          }
        });
      }
    });
  }

}

