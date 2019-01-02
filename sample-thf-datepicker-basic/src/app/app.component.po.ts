import { browser, by, element } from 'protractor';

export class SampleThfDatepickerBasicComponentPO {
  private sampleDatepicker = 'sample-thf-datepicker-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-datepicker?view=web');
  }

  get thfDatepicker() {
      return element(by.css(`${this.sampleDatepicker} .thf-calendar`));
  }

  get thfDatepickerIcon() {
    return element(by.css(`${this.sampleDatepicker} thf-field-container .thf-field-icon, .thf-icon-calendar`));
  }

}

