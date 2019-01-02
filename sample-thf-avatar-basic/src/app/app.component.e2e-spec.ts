import { SampleThfAvatarBasicComponentPO } from './sample-thf-avatar-basic.component.po';

describe('SampleThfAvatarBasic E2E', () => {
  const avatar = new SampleThfAvatarBasicComponentPO();

  beforeEach(() => {
    avatar.navigateTo();
  });

  it('Check if the element Thf Avatar is present', () => {
    expect(avatar.thfAvatar.isPresent()).toBeTruthy();
  });
});

