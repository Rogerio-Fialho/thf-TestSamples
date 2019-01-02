import { browser, by, element } from 'protractor';

export class ThfTableLabsPage {

  private sampleTable = 'sample-thf-table-labs';

  private checkLabel = '.thf-checkbox-group-label';

  private checkInput = '.thf-checkbox-group-input';

  private getThfCheckbox(checkGroup: string, checkValue: string) {
    return element(
      by.css(`${this.sampleTable} thf-checkbox-group[name="${checkGroup}"] ${this.checkInput}[value="${checkValue}"]+${this.checkLabel}`));
  }

  private getThfTableColumn(columnName: string) {
    return  element.all(by.cssContainingText(`${this.sampleTable} thf-table .thf-table-header-ellipsis span`, `${columnName}`));
  }

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/thf-table?view=web');
  }

  get thfCheckboxAllowSort() {
    return this.getThfCheckbox('options', 'allowSort');
  }

  get thfCheckboxStripedTable() {
    return this.getThfCheckbox('options', 'stripedTable');
  }

  get thfCheckboxShowMore() {
    return this.getThfCheckbox('options', 'showMore');
  }

  get thfCheckboxShowCheckbox() {
    return this.getThfCheckbox('checkboxOptions', 'showCheckbox');
  }

  get thfCheckboxSingleSelect() {
    return this.getThfCheckbox('checkboxOptions', 'singleSelect');
  }

  get thfCheckboxHideSelectAll() {
    return this.getThfCheckbox('checkboxOptions', 'hideSelectAll');
  }

  get thfCheckboxShowActions() {
    return this.getThfCheckbox('actionOptions', 'showActions');
  }

  get thfCheckboxNoBrasil() {
    return this.getThfCheckbox('actionOptions', 'noBrazil');
  }

  get thfCheckboxShowSingleAction() {
    return this.getThfCheckbox('actionOptions', 'showSingleAction');
  }

  get thfTableColumnDestiny() {
    return this.getThfTableColumn('Destino');
  }

  get thfTableColumnCountry() {
    return this.getThfTableColumn('País');
  }

  get thfTableColumnLeave() {
    return this.getThfTableColumn('Ida');
  }

  get thfTableColumnBack() {
    return this.getThfTableColumn('Volta');
  }

  get thfTableColumnFlightNumber() {
    return this.getThfTableColumn('Número do voo');
  }

  get thfTableColumnPrice() {
    return this.getThfTableColumn('Valor');
  }

  get thfButtonChangeMore() {
    return element(by.css(`${this.sampleTable} .thf-table-footer .thf-button`));
  }

  get thfTableActions() {
    return element.all(by.css(`${this.sampleTable} thf-table .thf-icon.thf-icon-more.thf-clickable`));
  }

}

