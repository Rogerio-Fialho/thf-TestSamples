import { SampleThfButtonLabsComponentPO } from './sample-thf-button-labs.component.po';

describe('SampleThfButtonLabs E2E', () => {
  const button = new SampleThfButtonLabsComponentPO();

  beforeAll(() => {
    button.navigateTo();
  });

  it('Check if the element Button is present and open modal and close', () => {
    expect(button.thfButton.isPresent()).toBeTruthy();

    button.thfButton.click();

    expect(button.thfModal.isPresent()).toBeTruthy();

    button.thfModalOk.click();

    expect(button.thfModal.isPresent()).toBeFalsy();
  });

  it('Check if properties are applied', () => {
    button.thfCheckboxSmall.click();

    expect(button.thfButton.getAttribute('class')).toContain('thf-button-sm');

    button.thfCheckboxDisable.click();

    expect(button.thfButton.isEnabled()).toBeFalsy();
  });

  it('Check `thf-button` show icon `thf-icon-totvs` after select icon `thf-icon-totvs`', () => {
    button.thfRadioLogoTotvs.click();

    expect(button.thfButtonIcon.getAttribute('class')).toContain('thf-icon-totvs');
  });

  it('Check `thf-button` show icon `thf-icon-user` after select icon `thf-icon-user`', () => {
    button.thfRadioUser.click();

    expect(button.thfButtonIcon.getAttribute('class')).toContain('thf-icon-user');
  });

  it('Check `thf-button` show icon `thf-icon-calendar` after select icon `thf-icon-calendar`', () => {
    button.thfRadioCalendar.click();

    expect(button.thfButtonIcon.getAttribute('class')).toContain('thf-icon-calendar');
    // expect(element(by.css('span .thf-icon'))).toBeTruthy();
    // expect(button.thfButtonIcon.isPresent()).toBeTruthy();
  });

  it('Check `thf-button` hide icon after select `none`', () => {
    button.thfRadioNone.click();

    expect(button.thfButtonIcon.isPresent()).toBeFalsy();
  });

  it('Apply ´default´ type to `thf-button`', () => {
    button.thfRadioDefault.click();

    expect(button.thfButton.getAttribute('class')).toContain('thf-button');

    expect(button.thfButton.getAttribute('class')).not.toContain('thf-button-primary');
    expect(button.thfButton.getAttribute('class')).not.toContain('thf-button-danger');
    expect(button.thfButton.getAttribute('class')).not.toContain('thf-button-link');
  });

  it('Apply ´primary´ type to `thf-button`', () => {
    button.thfRadioPrimary.click();

    expect(button.thfButton.getAttribute('class')).toContain('thf-button-primary');
  });

  it('Apply ´danger´ type to `thf-button`', () => {
    button.thfRadioDanger.click();

    expect(button.thfButton.getAttribute('class')).toContain('thf-button-danger');
  });

  it('Apply ´link´ type to `thf-button`', () => {
    button.thfRadioLink.click();

    expect(button.thfButton.getAttribute('class')).toContain('thf-button-link');
  });

  it('Check if `thf-input` is required after clean', () => {
    button.thfInputClean.click();

    expect(button.thfInputGroup.getAttribute('class')).toContain('ng-invalid');
  });

});

