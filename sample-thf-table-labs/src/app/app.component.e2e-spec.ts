import { ThfTableLabsPage } from './sample-thf-table-labs.component.po';

describe('Thf-Table-Labs E2E', () => {
  const table: ThfTableLabsPage = new ThfTableLabsPage();

  beforeEach(() => {
    table.navigateTo();
  });

  it('checkboxs disable on Init', () => {
    expect(table.thfCheckboxSingleSelect.click()).toBeFalsy();
    expect(table.thfCheckboxNoBrasil.click()).toBeFalsy();
    expect(table.thfCheckboxHideSelectAll.click()).toBeFalsy();
  });

  it('Load more results', () => {
    table.thfButtonChangeMore.click();
    expect(table.thfButtonChangeMore.isEnabled()).toBeFalsy();
    expect(table.thfCheckboxShowMore.isSelected()).toBeFalsy();
  });

  it('Checkbox select all disable', () => {
    table.thfCheckboxShowCheckbox.click();
    table.thfCheckboxSingleSelect.click();
    expect(table.thfCheckboxHideSelectAll.click()).toBeFalsy();
  });

  it('Checkis if column ´Destino´ exist', () => {
    expect(table.thfTableColumnDestiny.isPresent()).toBeTruthy();
  });

  it('Checkis if column ´País´ exist', () => {
    expect(table.thfTableColumnCountry.isPresent()).toBeTruthy();
  });

  it('Checkis if column ´Ida´ exist', () => {
    expect(table.thfTableColumnLeave.isPresent()).toBeTruthy();
  });

  it('Checkis if column ´Volta´ exist', () => {
    expect(table.thfTableColumnBack.isPresent()).toBeTruthy();
  });

  it('Checkis if column ´Número do voo´ exist', () => {
    expect(table.thfTableColumnFlightNumber.isPresent()).toBeTruthy();
  });

  it('Checkis if column ´Valor´ exist', () => {
    expect(table.thfTableColumnPrice.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Exibir seleção´ exist', () => {
    expect(table.thfCheckboxShowCheckbox.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Seleção de apenas uma linha´ exist', () => {
    expect(table.thfCheckboxSingleSelect.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Carregar mais resultados´ exist', () => {
    expect(table.thfCheckboxShowMore.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Desabilitar detalhes para Brasil´ exist', () => {
    expect(table.thfCheckboxNoBrasil.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Esconder checkbox selecionar todos´ exist', () => {
    expect(table.thfCheckboxHideSelectAll.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Permitir ordenação´ exist', () => {
    expect(table.thfCheckboxAllowSort.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Exibir ações´ exist', () => {
    expect(table.thfCheckboxShowActions.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox ´Exibir tabela listrada (striped)´ exist', () => {
    expect(table.thfCheckboxStripedTable.isPresent()).toBeTruthy();
  });

  it('Check if icon more is present ', () => {
    table.thfCheckboxShowActions.click();
    expect(table.thfTableActions.isPresent()).toBeTruthy();
  });

});

