import { SampleThfButtonBasicComponentPO } from './sample-thf-button-basic.component.po';

describe('SampleThfButtonBasic E2E', () => {
  const button = new SampleThfButtonBasicComponentPO();

  beforeEach(() => {
    button.navigateTo();
  });

  it('Check if the element Thf Button is present', () => {
    expect(button.thfButton.isPresent()).toBeTruthy();
  });
});

