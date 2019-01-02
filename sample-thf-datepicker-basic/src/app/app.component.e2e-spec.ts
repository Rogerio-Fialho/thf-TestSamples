import { SampleThfDatepickerBasicComponentPO } from './sample-thf-datepicker-basic.component.po';

describe('SampleThfdatepickerBasic E2E', () => {
  const datepicker = new SampleThfDatepickerBasicComponentPO();

  beforeEach(() => {
    datepicker.navigateTo();
  });

  it('Check if the element Thf datepicker is present', () => {
    datepicker.thfDatepickerIcon.click();
    expect(datepicker.thfDatepicker.isDisplayed()).toBeTruthy();
  });

});

