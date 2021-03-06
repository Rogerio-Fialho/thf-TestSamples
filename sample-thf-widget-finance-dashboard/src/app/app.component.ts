import { Component, ViewChild } from '@angular/core';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Component({
  selector: 'sample-thf-widget-finance-dashboard',
  templateUrl: './sample-thf-widget-finance-dashboard.component.html',
})
export class SampleThfWidgetFinanceDashboardComponent {

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';

  public readonly columnsDetails: Array<ThfTableColumn> = [
    { column: 'dateUpdate', label: 'Date update', type: 'date' },
    { column: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45'},
    { dateUpdate: '02-05-2018', statement: '-14.99'},
    { dateUpdate: '02-05-2018', statement: '-657.56'},
    { dateUpdate: '12-05-2017', statement: '3547.29'}
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300'},
    { dateUpdate: '03-05-2018', statement: '2000'},
    { dateUpdate: '02-05-2018', statement: '1500'},
    { dateUpdate: '02-05-2018', statement: '-200'},
    { dateUpdate: '12-05-2017', statement: '2000'}
  ];

  @ViewChild('detailsModal') detailsModalElement: ThfModalComponent;

  daysPayment() {
    window.open(this.paymentLink, '_blank');
  }

  openModal(type) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total checking account - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }

}

