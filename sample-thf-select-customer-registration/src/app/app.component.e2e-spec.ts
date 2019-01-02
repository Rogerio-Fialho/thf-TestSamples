import { ThfSelectPage } from './sample-thf-select-customer-registration.component.po';

describe('Thf-Select E2E', () => {
  const select: ThfSelectPage = new ThfSelectPage();

  beforeEach(() => {
    select.navigateTo();
  });

  it ('Dinamic clicks to state SP', () => {
    select.thfSelectState.click();
    select.stateSaoPaulo.click();
    expect(select.thfSelectState.getText()).toContain('São Paulo');
    expect(select.thfSelectCity.getText()).toContain('Campinas');
  });

  it ('Dinamic clicks to state SC', () => {
    select.thfSelectState.click();
    select.stateSantaCatarina.click();
    expect(select.thfSelectState.getText()).toContain('Santa Catarina');
    expect(select.thfSelectCity.getText()).toContain('Joinville');
  });

  it ('Dinamic clicks to state PR', () => {
    select.thfSelectState.click();
    select.stateParana.click();
    expect(select.thfSelectState.getText()).toContain('Paraná');
    expect(select.thfSelectCity.getText()).toContain('Curitiba');
  });

  it ('Check the cities of SP', () => {
    select.thfSelectState.click();
    select.stateSaoPaulo.click();
    select.thfSelectCity.click();
    expect(select.cityCampinas.isDisplayed()).toBeTruthy();
    expect(select.citySantoAndre.isPresent()).toBeTruthy();
    expect(select.citySantos.isDisplayed()).toBeTruthy();
  });

  it ('Check the cities of SC', () => {
    select.thfSelectState.click();
    select.stateSantaCatarina.click();
    select.thfSelectCity.click();
    expect(select.cityJoinville.isDisplayed()).toBeTruthy();
    expect(select.cityFlorianopolis.isPresent()).toBeTruthy();
    expect(select.cityTubarao.isDisplayed()).toBeTruthy();
  });

  it ('Check the cities of PR', () => {
    select.thfSelectState.click();
    select.stateParana.click();
    select.thfSelectCity.click();
    expect(select.cityCuritiba.isDisplayed()).toBeTruthy();
    expect(select.cityMafra.isPresent()).toBeTruthy();
    expect(select.cityRioNegro.isDisplayed()).toBeTruthy();
  });

});

