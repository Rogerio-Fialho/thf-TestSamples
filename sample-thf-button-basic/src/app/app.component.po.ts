import { browser, by, element } from 'protractor';

export class SampleThfButtonBasicComponentPO {
  private sampleName = 'sample-thf-button-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-button?view=web');
  }

  get thfButton() {
    return element(by.css(`${this.sampleName} .thf-button`));
  }
}

