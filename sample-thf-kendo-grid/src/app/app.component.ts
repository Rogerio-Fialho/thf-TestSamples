import { Component } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfGridColumn } from '@totvs/thf-kendo/components/thf-grid';

@Component({
  selector: 'sample-thf-kendo-grid',
  templateUrl: './sample-thf-kendo-grid.component.html',
})
export class SampleThfKendoGridComponent {
  selectedItem: string;
  message: string;

  allowedValues: Array<any> = ['save', 'editable'];
  allowedOptions: Array<ThfCheckboxGroupOption> = this.getAllowedOptions();

  removeStatusValues: Array<any> = [];
  removeStatusOptions = this.getRemoveStatusOptions();

  visualizationsValues: Array<any> = ['selectable'];
  visualizationsOptions = this.getVisualizationsOptions();

  dataItems: Array<Object> = this.getDataItems();
  columns: Array<ThfGridColumn> = this.getColumns();

  onSelectionChange(event) {
    this.selectedItem = event.data ? event.data.ProductName : '' ;
  }

  onRemove(event) {
    const data = event.data;

    const statusName = data.Status ? data.Status.StatusName : '';
    const allowedRemove = this.removeStatusValues.includes(statusName) || statusName === '';

    this.message = allowedRemove ? '' : `Itens com status de ${statusName} não podem ser removidos`;

    return allowedRemove;
  }

  onSave(event) {
    return this.allowedValues.includes('save');
  }

  loadMoreData() {
    const itemId = this.dataItems.length + 1;

    this.dataItems.push({
      ProductID: itemId,
      ProductName: `Item ${itemId}`,
      StatusID: 3,
      CategoryID: 2,
      UnitPrice: 25,
      UnitsInStock: 120,
      Discontinued: false,
      Status: {
        StatusID: 3,
        StatusName: 'OK'
      },
      Category: {
        CategoryID: 2,
        CategoryName: 'Condimentos'
      }
    });
  }

  private getColumns(): Array<ThfGridColumn> {
    return [
      { column: 'ProductID', label: 'Código', width: 80 },
      { column: 'ProductName', label: 'Nome', width: 180, required: true, editable: true },
      { column: 'Category.CategoryName', label: 'Categoria', width: 90},
      { column: 'Status.StatusName', label: 'Status', width: 90 },
      { column: 'UnitPrice', label: 'Preço', width: 90, editable: true, type: 'currency'},
      { column: 'UnitsInStock', label: 'Em Estoque', width: 90, editable: true, type: 'number' },
      { column: 'Discontinued', label: 'Interrompido', width: 100, checkbox: true }
    ];
  }

  private getAllowedOptions(): Array<ThfCheckboxGroupOption> {
    return [
      {
        value: 'add',
        label: 'Permite adicionar novos itens'
      },
      {
        value: 'editable',
        label: 'Permite edição',
      },
      {
        value: 'save',
        label: 'Permite salvar os itens',
      },
      {
        value: 'groupable',
        label: 'Permite agrupamento',
      }
    ];
  }

  private getRemoveStatusOptions(): Array<ThfCheckboxGroupOption> {
    return [
      {
        value: 'Pendente',
        label: 'Pendente'
      },
      {
        value: 'OK',
        label: 'OK'
      },
      {
        value: 'Requisitado',
        label: 'Requisitado',
      }
    ];
  }

  private getVisualizationsOptions() {
    return [
      {
        value: 'remove',
        label: 'Exibir botão de remover'
      },
      {
        value: 'export',
        label: 'Exibir ações de exportação'
      },
      {
        value: 'selectable',
        label: 'Exibir seleção de linhas'
      }
    ];
  }

  private getDataItems(): Array<Object> {
    return [{
      ProductID: 1,
      ProductName: 'Chai',
      StatusID: 1,
      CategoryID: 1,
      UnitPrice: 18,
      UnitsInStock: 39,
      Discontinued: false,
      Status: {
        StatusID: 1,
        StatusName: 'Pendente'
      },
      Category: {
        CategoryID: 1,
        CategoryName: 'Bebidas',
      }
    }, {
      ProductID: 2,
      ProductName: 'Chang',
      StatusID: 2,
      CategoryID: 1,
      UnitPrice: 19,
      UnitsInStock: 17,
      Discontinued: false,
      Status: {
        StatusID: 2,
        StatusName: 'Requisitado'
      },
      Category: {
        CategoryID: 1,
        CategoryName: 'Bebidas',
      }
    }, {
      ProductID: 3,
      ProductName: 'Aniseed Syrup',
      StatusID: 3,
      CategoryID: 2,
      UnitPrice: 10,
      UnitsInStock: 13,
      Discontinued: false,
      Status: {
        StatusID: 3,
        StatusName: 'OK'
      },
      Category: {
        CategoryID: 2,
        CategoryName: 'Condimentos'
      }
    }, {
      ProductID: 4,
      ProductName: 'Chef Anton\'s Cajun Seasoning',
      StatusID: 3,
      CategoryID: 2,
      UnitPrice: 22,
      UnitsInStock: 53,
      Discontinued: false,
      Status: {
        StatusID: 3,
        StatusName: 'OK'
      },
      Category: {
        CategoryID: 2,
        CategoryName: 'Condimentos'
      }
    }, {
      ProductID: 5,
      ProductName: 'Chef Anton\'s Gumbo Mix',
      StatusID: 2,
      CategoryID: 2,
      UnitPrice: 21.35,
      UnitsInStock: 0,
      Discontinued: true,
      Status: {
        StatusID: 2,
        StatusName: 'Requisitado'
      },
      Category: {
        CategoryID: 2,
        CategoryName: 'Condimentos'
      }
    }];
  }
}

