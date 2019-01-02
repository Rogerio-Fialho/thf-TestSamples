import { browser, by, element } from 'protractor';

export class ThfSwitchPage {
  private sampleSwitch = 'sample-thf-switch-labs';

  private boxLabel = '.thf-checkbox-group-label';

  private _thfSwitch;

  private getThfCheckBox(checkbox: string) {
    return element(by.css(`${this.sampleSwitch} [name="properties"] .thf-checkbox-group-input[value="${checkbox}"]+${this.boxLabel}`));
  }

  private getThfInputLabel(labelName) {
    return element(by.css(`${this.sampleSwitch} thf-input [name="${labelName}"]`));
  }

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-switch?view=web');
  }

  get thfSwitch() {
    if (!this._thfSwitch) {
      this._thfSwitch = element(by.css(`${this.sampleSwitch} .thf-switch-container`));
    }
    return this._thfSwitch;
  }

  get thfCheckboxDisabled() {
    return this.getThfCheckBox('disabled');
  }

  get thfInputLabelSwitch() {
    return this.getThfInputLabel('label');
  }

  get thfInputLabelOn() {
    return this.getThfInputLabel('labelOn');
  }

  get thfInputLabelOff() {
    return this.getThfInputLabel('labelOff');
  }

  get thfFieldTitle() {
    return element(by.css(`${this.sampleSwitch} .thf-field-title`));
  }

  get thfSwitchLabel() {
    return element(by.css(`${this.sampleSwitch} .thf-switch[name="thfSwitch"] .thf-switch-label`));
  }

  get thfFieldOptional() {
    return element(by.css(`${this.sampleSwitch} thf-switch .thf-field-optional`));
  }

}

