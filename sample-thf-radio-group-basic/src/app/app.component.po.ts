import { browser, by, element } from 'protractor';

export class ThfRadioTest {

  private sampleRadio = 'sample-thf-radio-group';

  private labelRadio = '.thf-radio-group-label';

  private inputRadio = '.thf-radio-group-input';

  private getInterestArea(area) {
    return element(
      by.css(`${this.sampleRadio} thf-radio-group[name="interestName"] ${this.inputRadio}[value="${area}"]+${this.labelRadio}`));
  }

  private getGenderName(gender) {
    return element(
      by.css(`${this.sampleRadio} thf-radio-group[name="genderName"] ${this.inputRadio}[value="${gender}"]+${this.labelRadio}`));
  }

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-radio-group?view=web');
  }

  get thfButton() {
    return element(by.css(`${this.sampleRadio} thf-button .thf-button`));
  }

  get thfRadioMovie() {
    return this.getInterestArea('movies');
  }

  get thfRadioBook() {
    return this.getInterestArea('books');
  }

  get thfRadioArt() {
    return this.getInterestArea('arts');
  }

  get thfRadioMusic() {
    return this.getInterestArea('music');
  }

  get thfRadioSport() {
    return this.getInterestArea('sports');
  }

  get thfRadioFemale() {
    return this.getGenderName('female');
  }

  get thfRadioMale() {
    return this.getGenderName('male');
  }

}

