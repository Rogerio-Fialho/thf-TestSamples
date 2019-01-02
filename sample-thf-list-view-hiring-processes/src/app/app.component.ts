import { Component, OnInit, ViewChild } from '@angular/core';

import { ThfListViewAction } from '@totvs/thf-ui/components/thf-list-view';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfPageAction, ThfPageFilter } from '@totvs/thf-ui/components/thf-page';

import { SampleThfListViewHiringProcessesService } from './sample-thf-list-view-hiring-processes.service';

@Component({
  selector: 'sample-thf-list-view-hiring-processes',
  templateUrl: 'sample-thf-list-view-hiring-processes.component.html',
  providers: [ SampleThfListViewHiringProcessesService ]
})
export class SampleThfListViewHiringProcessesComponent implements OnInit {

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<ThfListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'thf-icon-ok'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'thf-icon-close'
    }
  ];

  readonly pageActions: Array<ThfPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'thf-icon-ok'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'thf-icon-close'
    }
  ];

  readonly filterSettings: ThfPageFilter = {
    action: 'hiringProcessesFilter',
    ngModel: 'labelFilter',
    placeholder: 'Search'
  };

  @ViewChild('detailsModal') detailsModalElement: ThfModalComponent;

  constructor(
    private thfNotification: ThfNotificationService,
    private hiringProcessesService: SampleThfListViewHiringProcessesService) { }

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return `${item.idCard} - ${item.name}`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(event) {
    this.getModalItem(event);
    this.titleDetailsModal = `Get in touch with ${this.selectedActionItem['name']}`;
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.thfNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private getModalItem(event) {
    this.selectedActionItem = this.hiringProcessesFiltered.find(item => {
      return event.target.innerHTML.includes(item['idCard']);
    });
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.thfNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(filters = [this.labelFilter]) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item => {
      return Object.keys(item)
      .some(key => (!(item[key] instanceof Object) && this.includeFilter(item[key], filters)));
    });
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {

      if (candidate['$selected']) {

        switch (candidate['hireStatus']) {

          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.thfNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.thfNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }

    });
  }

}

