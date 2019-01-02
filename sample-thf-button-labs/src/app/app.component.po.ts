import { browser, by, element } from 'protractor';

export class SampleThfButtonLabsComponentPO {
  private sampleName = 'sample-thf-button-labs';

  private thfCheckboxGroupProperties = 'thf-checkbox-group[name="properties"] .thf-checkbox-group-input';
  private thfCheckboxGroupPropertiesLabel = '.thf-checkbox-group-label';
  private thfRadioGroupLabel = '.thf-radio-group-label';

  private getThfButtonProperties(prop) {
    return element(
      by.css(`${this.sampleName} ${this.thfCheckboxGroupProperties}[value="${prop}"]+${this.thfCheckboxGroupPropertiesLabel}`));
  }

  private getThfButtonIcon(icon) {
    return element(
      by.css(`${this.sampleName} thf-radio-group[name="icon"] .thf-radio-group-input[value="${icon}"]+${this.thfRadioGroupLabel}`));
  }

  private getThfButtonType(type) {
    return element(
      by.css(`${this.sampleName} thf-radio-group[name="type"] .thf-radio-group-input[value="${type}"]+${this.thfRadioGroupLabel}`));
  }

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-button?view=web' + '/documentation/thf-button?view=web' + '/documentation/thf-button?view=web');
  }

  get thfButton() {
    return element(by.css(`${this.sampleName} .thf-button`));
  }

  get thfButtonIcon() {
    return element(by.css(`${this.sampleName} thf-button span.thf-icon`));
  }

  get thfModal() {
    return element(by.css('.thf-modal-content'));
  }

  get thfModalOk() {
    return this.thfModal.element(by.css('.thf-button'));
  }

  get thfCheckboxSmall() {
    return this.getThfButtonProperties('small');
  }

  get thfCheckboxDisable() {
    return this.getThfButtonProperties('disabled');
  }

  get thfRadioLogoTotvs() {
    return this.getThfButtonIcon('thf-icon-totvs');
  }

  get thfRadioCalendar() {
    return this.getThfButtonIcon('thf-icon-calendar');
  }

  get thfRadioUser() {
    return this.getThfButtonIcon('thf-icon-user');
  }
  get thfRadioNone() {
    return this.getThfButtonIcon('undefined');
  }

  get thfRadioDefault() {
    return this.getThfButtonType('default');
  }

  get thfRadioDanger() {
    return this.getThfButtonType('danger');
  }

  get thfRadioPrimary() {
    return this.getThfButtonType('primary');
  }

  get thfRadioLink() {
    return this.getThfButtonType('link');
  }

  get thfInputClean() {
    return element(by.tagName(`${this.sampleName} thf-clean span`));
  }

  get thfInputGroup() {
    return element(by.css(`${this.sampleName} thf-input`));
  }

}

