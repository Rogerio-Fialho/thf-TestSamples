import { browser, by, element } from 'protractor';

export class SampleThfEmailBasicComponentPO {
  private sampleName = 'sample-thf-email-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-email?view=web');
  }

  get thfEmailInput() {
    return element(by.css(`${this.sampleName} thf-email .thf-field-container-content input[type="email"]`));
  }

}

