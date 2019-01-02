import { ThfSwitchPage } from './sample-thf-switch-labs.component.po';

describe('Thf-Switch E2E', () => {
  const page: ThfSwitchPage = new ThfSwitchPage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('Verify if switch is clickable', () => {
    page.thfSwitch.click();
    expect(page.thfSwitch.getAttribute('class')).toContain('thf-switch-container-off');
    page.thfSwitch.click();
    expect(page.thfSwitch.getAttribute('class')).toContain('thf-switch-container-on');
  });

  it('Switch disable', () => {
    page.thfCheckboxDisabled.click();
    expect(page.thfSwitch.getAttribute('class')).toContain('thf-switch-container-disabled');
  });

  it('Change the switch label', () => {
    page.thfInputLabelSwitch.clear();
    page.thfInputLabelSwitch.sendKeys('My Label');
    expect(page.thfFieldTitle.getText()).toContain('My Label');
  });

  it('Change the Label On', () => {
    page.thfInputLabelOn.clear();
    page.thfInputLabelOn.sendKeys('Here is On!');
    expect(page.thfSwitchLabel.getText()).toContain('Here is On!');
  });

  it('Change the Label Off', () => {
    page.thfInputLabelOff.clear();
    page.thfInputLabelOff.sendKeys('Here is Off!');
    page.thfSwitch.click();
    expect(page.thfSwitchLabel.getText()).toContain('Here is Off!');
  });

  it('Trun on required Switch', () => {
    expect(page.thfFieldOptional.isPresent()).toBeTruthy();
    page.thfCheckboxRequired.click();
    expect(page.thfFieldOptional.isPresent()).toBeFalsy();
  });

});

