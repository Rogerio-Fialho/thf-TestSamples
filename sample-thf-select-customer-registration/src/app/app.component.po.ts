import { browser, by, element } from 'protractor';

export class ThfSelectPage {

  private sample = 'sample-thf-select';

  private getThfSelect(selectName: string) {
    return element(by.css(`${this.sample} [name=${selectName}] .thf-select-button`));
  }

  private getThfSelectItem(selectVal: string, stateVal: number) {
    return element(by.css(`${this.sample} thf-select[name=${selectVal}] .thf-select-content > li[value="${stateVal}"]`));
  }

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-select?view=web');
  }

  get thfSelectState() {
    return this.getThfSelect('state');
  }

  get thfSelectCity() {
    return this.getThfSelect('city');
  }

  get stateSaoPaulo() {
    return this.getThfSelectItem('state', 1);
  }

  get stateSantaCatarina() {
    return this.getThfSelectItem('state', 2);
  }

  get stateParana() {
    return this.getThfSelectItem('state', 3);
  }

  get cityCampinas() {
    return this.getThfSelectItem('city', 1);
  }

  get citySantoAndre() {
    return this.getThfSelectItem('city', 2);
  }

  get citySantos() {
    return this.getThfSelectItem('city', 3);
  }

  get cityJoinville() {
    return this.getThfSelectItem('city', 4);
  }

  get cityFlorianopolis() {
    return this.getThfSelectItem('city', 5);
  }

  get cityTubarao() {
    return this.getThfSelectItem('city', 6);
  }

  get cityCuritiba() {
    return this.getThfSelectItem('city', 7);
  }

  get cityMafra() {
    return this.getThfSelectItem('city', 8);
  }

  get cityRioNegro() {
    return this.getThfSelectItem('city', 9);
  }

}

