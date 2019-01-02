import { SampleThfEmailBasicComponentPO } from './sample-thf-email-basic.component.po';

describe('SampleThfEmailBasic E2E', () => {
  const email = new SampleThfEmailBasicComponentPO();

  beforeEach(() => {
    email.navigateTo();
  });

  it('Check if the element Thf Email is present', () => {
    expect(email.thfEmailInput.isPresent()).toBeTruthy();
  });
});

