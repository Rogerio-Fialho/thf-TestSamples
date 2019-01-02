import { browser } from 'protractor';

import { ThfRadioTest } from './sample-thf-radio-group-basic.component.po';

describe('Thf-Radio-Group E2E', () => {

  const radio: ThfRadioTest = new ThfRadioTest();

  beforeEach(() => {
    radio.navigateTo();
  });

  it ('Verify if button is disable on init', () => {
    browser.refresh();
    expect(radio.thfButton.isEnabled()).toBeFalsy();
  });

  it ('Making the choice gender female', () => {
    radio.thfRadioFemale.click();
    expect(radio.thfRadioFemale).toBeTruthy();
    const btn = radio.thfButton;
    expect(btn.isEnabled()).toBeTruthy();
  });

  it ('Makink the choice gender male', () => {
    radio.thfRadioMale.click();
    expect(radio.thfRadioMale).toBeTruthy();
    const btn = radio.thfButton;
    expect(btn.isEnabled()).toBeTruthy();
  });

  it ('Verify if button is disable after browser reload', () => {
    radio.thfRadioMale.click();
    browser.refresh();
    expect(radio.thfButton.isEnabled()).toBeFalsy();
  });

  it ('Choose interest book', () => {
    radio.thfRadioBook.click();
    expect(radio.thfRadioBook.getAttribute('class')).toBeTruthy();
    expect(radio.thfRadioMovie.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioMusic.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioArt.getAttribute('thf-input-radio')).toBeFalsy();
  });

  it ('Choose interest film', () => {
    radio.thfRadioMovie.click();
    expect(radio.thfRadioMovie.getAttribute('class')).toBeTruthy();
    expect(radio.thfRadioBook.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioMusic.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioArt.getAttribute('thf-input-radio')).toBeFalsy();
  });

  it ('Choose interest music', () => {
    radio.thfRadioMusic.click();
    expect(radio.thfRadioMusic.getAttribute('class')).toBeTruthy();
    expect(radio.thfRadioMovie.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioBook.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioArt.getAttribute('thf-input-radio')).toBeFalsy();
  });

  it ('Choose interest art', () => {
    radio.thfRadioArt.click();
    expect(radio.thfRadioArt.getAttribute('class')).toBeTruthy();
    expect(radio.thfRadioMovie.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioBook.getAttribute('thf-input-radio')).toBeFalsy();
    expect(radio.thfRadioMusic.getAttribute('thf-input-radio')).toBeFalsy();
  });
});

