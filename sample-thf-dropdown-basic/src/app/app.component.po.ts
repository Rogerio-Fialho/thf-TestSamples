import { browser, by, element } from 'protractor';

export class SampleThfDropdownBasicComponentPO {
  private sampleName = 'sample-thf-dropdown-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-dropdown?view=web');
  }

  get thfDropdown() {
    return element(by.css(`${this.sampleName} .dropdown .button-dropdown`));
  }

  get thfDropdownContent() {
    return element.all(by.css(`${this.sampleName} .dropdown .dropdown-content li a`));
  }
}

