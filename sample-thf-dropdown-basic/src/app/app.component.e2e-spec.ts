import { SampleThfDropdownBasicComponentPO } from './sample-thf-dropdown-basic.component.po';

describe('SampleThfDropdownBasic E2E', () => {
  const dropdown = new SampleThfDropdownBasicComponentPO();

  beforeEach(() => {
    dropdown.navigateTo();
  });

  it('Check if Thf Dropdown is present', () => {
    expect(dropdown.thfDropdown.isPresent()).toBeTruthy();
  });

  it('Check if Thf Dropdown-Content is present', () => {
    dropdown.thfDropdown.click();
    expect(dropdown.thfDropdownContent.isDisplayed()).toBeTruthy();
  });

  it('Check if Thf Dropdown-Content has content ', () => {
    dropdown.thfDropdown.click();
    expect(dropdown.thfDropdownContent.count()).toBe(5);
  });

});

