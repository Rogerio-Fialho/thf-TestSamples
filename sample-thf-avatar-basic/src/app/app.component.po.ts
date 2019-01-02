import { browser, by, element } from 'protractor';

export class SampleThfAvatarBasicComponentPO {
  private sampleName = 'sample-thf-avatar-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-avatar?view=web');
  }

  get thfAvatar() {
    return element(by.css(`${this.sampleName} .thf-avatar`));
  }
}

